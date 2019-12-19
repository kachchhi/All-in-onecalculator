import React from 'react';
import {StyleSheet} from 'react-native';

import LoanCalculator from './LoanCalculator';

import SipCalculator from './SipCalculator';

// import OneCalculator from './OneCalculator';

import {Container} from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <LoanCalculator />
        {/* <OneCalculator /> */}
        <SipCalculator />
      </Container>
    );
  }
}
