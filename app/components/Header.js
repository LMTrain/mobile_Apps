/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.headerbg}
        source={{uri:'https://lmtrain.github.io/lm-images/assets/images/space3.webp'}}
        >
        <View style={styles.headercontainer}>
          <View style={styles.profilepiccontainer}>
            <Image
              style={styles.mypic}
              source={require('../img/calendly.jpg')}
               />
          </View>
          <Text style={styles.name}>Laycon Muriziq</Text>
          
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerbg: {
    marginTop: 20,
    flex: 1,
    width: 410,
    height: 220,
    
    // alignSelf: 'stretch',
   
  },
  headercontainer: {
    marginTop: 75,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    // backgroundColor: 'rgba(0,0,0,0.6)',
  },
  profilepiccontainer: {
    // marginTop: 35,
    width: 180,
    height: 180,

  },
  mypic: {
    marginBottom: 5,
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 90,
    borderWidth: 1,
    borderColor: '#fff',
  },
  name: {
    // marginTop: -13,
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: -15,
  },
  liner: {
    color: '#fff',
    // marginTop: -10,
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: -29,
  },
});
