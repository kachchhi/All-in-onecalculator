import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import {
  Container,
  Header,
  Content,
  Body,
  Text,
  Label,
  Item,
  Button,
  Icon,
  Title,
  Left,
  Right,
  View,
  card,
} from 'native-base';

export default class HomeHeader extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button>
            <Icon name="menu" />
          </Button>
        </Left>

        <Body>
          <Title style={{margin: 10}}>SipCalculator</Title>
        </Body>
      </Header>
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
