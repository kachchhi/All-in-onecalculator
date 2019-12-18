import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import HomeHeader from './HomeHeader';
import SipCalculator from './SipCalculator';
import SipBody from './SipBody';
import OneCalculator from './OneCalculator';

import {Container} from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <HomeHeader />
        <OneCalculator />
        <SipCalculator />
        <SipBody />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    height: '100%',
  },
  paragraph: {
    fontSize: 10,
    fontWeight: 'bold',

    flex: 1,
  },
});
