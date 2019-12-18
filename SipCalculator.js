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
  List,
} from 'native-base';

export default class SipCalculator extends React.Component {
  render() {
    return (
      <Container>
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
        <Content>
          <List>
            <ListItem>
              <Body>
                <Text>Investment Amount</Text>
                <Text note></Text>
              </Body>
              <Right>
                <Input
                  style={{borderWidth: 2, width: 150}}
                  defaultValue={'10000'}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Expected Gian/Year</Text>
                <Text note></Text>
              </Body>
              <Right>
                <Input
                  style={{borderWidth: 2, width: 150}}
                  defaultValue={'21%'}
                />
              </Right>
            </ListItem>

            <Button block rounded success>
              <Text>calculate</Text>
            </Button>
          </List>
        </Content>
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
