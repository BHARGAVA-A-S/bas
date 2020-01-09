import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';

export default class VideoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  _onPressButton = () => {
    Alert.alert('Check your email');
  };

  componentDidMount = () => {
    fetch('https://cw-tech.herokuapp.com/feed.json', {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responceJson => {
        console.log(responceJson);
        console.log(this);
        this.setState({
          data: responceJson,
        });
        console.log(this.state);
      })

      .catch(e => {
        console.error(e);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <ActivityIndicator
          size="small"
          color="#00ff00"
          hidesWhenStopped={true}
        /> */}
        <FlatList
          data={this.state.data.feed}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => this._onPressButton()}>
              <View style={{paddingLeft: 5, marginTop: 5}}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 5,
                  }}
                  source={{
                    uri: item.thumbnail,
                  }}></Image>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    marginTop: 20,
                    paddingLeft: 5,
                    width: '45%',
                  }}>
                  {item.title}
                </Text>
                <Text style={{paddingLeft: 100, marginTop: 5}}>
                  {item.author.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
