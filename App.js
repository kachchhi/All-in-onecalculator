import React from 'react';
import {StyleSheet} from 'react-native';

import LoanCalculator from './LoanCalculator';

import {Container} from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <LoanCalculator />
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
