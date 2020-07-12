/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class HeroText extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headerText}>Laptops</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderRadius: 10,

    elevation: 1,
    alignSelf: 'center',
    fontSize: 25,
    color: '#292929',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    fontWeight: 'bold',
  },
});
