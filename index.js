/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HomeScreen from './app/views/HomeScreen';
import React from 'react';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => RNRedux);
