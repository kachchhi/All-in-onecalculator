import React from 'react';
import {} from 'react-native';

import {
  Container,
  Left,
  Body,
  Title,
  Right,
  Header,
  Button,
  Icon,
  Content,
  Subtitle,
} from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Body>
            <Title style={{margin: 10}}>Sip Calculator</Title>
          </Body>
        </Left>
      </Header>
    );
  }
}
