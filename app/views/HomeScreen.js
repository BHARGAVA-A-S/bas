import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

import {SearchBar} from 'react-native-elements';
import {TabBar} from './TabBar';
import All from './All';
import Article from './Article';
import Video from './Video';
import Park from './Park';

import {connect} from 'react-redux';
import {getData} from '../../actions/api';

import {bindActionCreators} from 'redux';

class HomeScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tabName: 'All',
    };
  }

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
        let {storeData} = this.props;
        // this.props.storeData('hello');
        storeData.getData('hello');
        this.setState({
          data: responceJson,
        });
      })

      .catch(e => {
        console.error(e);
      });
  };

  render() {
    return (
      //ListView to show with textinput used as search bar

      <ScrollView style={{flex: 1}}>
        {/* Search bar */}
        <View style={styles.viewStyle}>
          <SearchBar
            round
            searchIcon={{size: 24}}
            // onChangeText={text => this.SearchFilterFunction(text)}
            // onClear={text => this.SearchFilterFunction('')}
            placeholder="Search Here..."
            value={this.state.search}
          />
        </View>

        {/* Scrollable Tab */}
        <View
          style={{
            backgroundColor: 'skyblue',
            borderRadius: 5,
            flex: 0.03,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => this.setState({tabName: 'All'})}
              style={{paddingRight: 50, justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', paddingLeft: 50}}>All</Text>
            </TouchableOpacity>
            <View
              style={{
                width: 2,
                height: 25,

                marginLeft: 10,
                backgroundColor: '#e9e9e9',
              }}></View>
            <TouchableOpacity
              onPress={() => this.setState({tabName: 'Article'})}
              style={{paddingRight: 50, justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', paddingLeft: 60}}>
                Article
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: 2,
                height: 25,

                marginLeft: 10,
                backgroundColor: '#e9e9e9',
              }}></View>

            <TouchableOpacity
              onPress={() => this.setState({tabName: 'Video'})}
              style={{paddingRight: 50, justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', paddingLeft: 60}}>Video</Text>
            </TouchableOpacity>

            <View
              style={{
                width: 2,
                height: 25,

                marginLeft: 10,
                backgroundColor: '#e9e9e9',
              }}></View>

            <TouchableOpacity
              onPress={() => this.setState({tabName: 'Park'})}
              style={{paddingRight: 50, justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', paddingLeft: 60}}>Park</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* List View */}
        <View
          style={{
            flex: 0.9,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {this.tabnav()}
        </View>
      </ScrollView>
    );
  }

  tabnav = () => {
    switch (this.state.tabName) {
      case 'All':
        return (
          // <View>
          <All />
          // </View>
        );

      case 'Article':
        return (
          // <View>
          <Article />
          // </View>
        );

      case 'Video':
        return (
          // <View>

          <Video />
          // </View>
        );

      case 'Park':
        return (
          // <View>
          <Park />
          // </View>
        );
    }
  };
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 0.095,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textStyle: {
    padding: 10,
  },
});

const mapStateToProps = state => ({
  data: state.data,
});

// const ActionCreators = Object.assign({}, changeCount);
// const mapDispatchToProps = dispatch => {
//   return {
//     storeData: data => dispatch(getData, data),
//   };
// };
const mapDispatchToProps = dispatch => ({
  storeData: bindActionCreators({getData}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
