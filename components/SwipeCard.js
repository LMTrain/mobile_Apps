/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';


const cards = [
  {
    text: 'Bugatti La Voiture Noire',
    name: 'La Voiture Noire',
    image: "https://lmtrain.github.io/lm-images/assets/images/bugatti_la_voiture%20noire_up.jpg",
  },
  {
    text: 'Future Bike',
    name: 'Wheeless Bike',
    image: "https://lmtrain.github.io/lm-images/assets/images/futurecar18.jpg",
  },
  {
    text: 'Future Benz',
    name: 'Mercedes Benz',
    image: "https://lmtrain.github.io/lm-images/assets/images/futurecar2.jpg",
  },
  {
    text: 'Future Renault',
    name: 'Renault in Desert',
    image: "https://lmtrain.github.io/lm-images/assets/images/futurecar9.jpg",
  },
];





export default class SwipeCard extends Component {
  render() {
    return (
      <DeckSwiper
        dataSource={cards}
        renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: item.image}} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>Laycon Clicked</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={{uri: item.image}} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }


         />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
