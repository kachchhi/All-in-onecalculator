import React from 'react';
import {} from 'react-native';

import SipCalculator from './SipCalculator';

// import OneCalculator from './OneCalculator';

import {Container} from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        {/* <OneCalculator /> */}
        <SipCalculator />
      </Container>
    );
  }
}
