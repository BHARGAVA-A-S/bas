import React, {lazy} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import AllScreen from './All';
import ArticleScreen from './Article';
import VideoScreen from './Video';

const TabNavigator = createMaterialTopTabNavigator(
  {
    All: AllScreen,
    Article: ArticleScreen,
    Video: VideoScreen,
  },

  {
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: 'orange',
      inactiveTintColor: 'lightgray',

      style: {
        backgroundColor: 'skyblue',
      },
    },
  },
);

export default createAppContainer(TabNavigator);
