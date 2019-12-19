import React from 'react';
import {StyleSheet} from 'react-native';

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

export default class LoanCalculator extends React.Component {
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
            <Title style={{margin: 10}}>Advanced Loan Calculator</Title>
          </Body>
        </Header>

        <Footer style={{marginTop: 10}}>
          <FooterTab>
            <Button active>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                Choose a Calculation
              </Text>
            </Button>
            <Button active></Button>
          </FooterTab>
        </Footer>
        <Content>
          <List>
            <ListItem>
              <Body>
                <Text>Loan Amount: $</Text>
              </Body>
              <Right>
                <Input
                  style={{borderWidth: 2, width: 150}}
                  defaultValue={'10000 Rs'}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Intrest Rate: %</Text>
              </Body>
              <Right>
                <Input
                  style={{borderWidth: 2, width: 150}}
                  defaultValue={'3.5%'}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Compounding:</Text>
              </Body>

              <Right>
                <Input
                  style={{borderWidth: 2, width: 150}}
                  defaultValue={'Monthly(12/yr)'}
                />
              </Right>
            </ListItem>

            <Button rounded success>
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
