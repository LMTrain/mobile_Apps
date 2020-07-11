/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          source={require('../img/img1.png')}
          style={styles.logo}
           />
         <Text style={styles.title}>LCO Shopping Cart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    marginTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: Dimensions.get('window').width,
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',

  },
  logo:{
    width: 40,
    height: 40,
    marginTop: 20,
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    fontStyle: 'italic',
  },
});
