/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView 
        horizontal={true} 
        pagingEnabled={true} 
        style={styles.container}
      >
        <View style={styles.outer}>
          <Text style={styles.innerText}>Welcome to Laycon App </Text>          
        </View>
        <View style={[styles.outer, styles.red]}>
          <Text style={styles.innerText}>Best quality Videos </Text>          
        </View>
        <View style={[styles.outer, styles.green]}>
          <Text style={styles.innerText}>Available on iOS and Androids</Text>          
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  outer: {
    flex: 1,
    backgroundColor: '#74B9FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  innerText: {
    fontSize: 23,
    color: '#EAF0F1',
    fontWeight: 'bold',
  },
  red: {
    backgroundColor: '#EA425C',
   
  },
  green: {
    backgroundColor: '#1BCA9B',
   
  },
});
