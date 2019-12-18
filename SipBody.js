import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import {
  Container,
  Header,
  Content,
  Body,
  Text,
  Input,
  ListItem,
  List,
  Right,
  Icon,
  Button,
} from 'native-base';

export default class SipBody extends React.Component {
  render() {
    return (
      <List>
        <ListItem>
          <Body>
            <Text>Investment Amount</Text>
            <Text note></Text>
          </Body>
          <Right>
            <Input style={{borderWidth: 2, width: 150}}>10000</Input>
          </Right>
        </ListItem>
        <ListItem>
          <Body>
            <Text>Expected Gian/Year</Text>
            <Text note></Text>
          </Body>
          <Right>
            <Input style={{borderWidth: 2, width: 150}}>21%</Input>
          </Right>
        </ListItem>

        <Button block success>
          <Text>calculate</Text>
        </Button>
      </List>
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
