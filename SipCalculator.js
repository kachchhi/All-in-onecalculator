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
  Card,
  Footer,
  FooterTab,
  Input,
  ListItem,
} from 'native-base';

export default class SipCalculator extends React.Component {
  render() {
    return (
      <Footer style={{marginTop: 10}}>
        <FooterTab>
          <Button active>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Sip</Text>
          </Button>
          <Button active>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>One-Time</Text>
          </Button>
        </FooterTab>
      </Footer>
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
