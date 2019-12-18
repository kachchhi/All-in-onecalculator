/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import OneCalculator from './OneCalculator';

export default class App extends React.Component {
  render() {
    return <OneCalculator />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'success',
    height: '100%',
  },
  paragraph: {
    fontSize: 10,
    fontWeight: 'bold',

    flex: 1,
  },
});
