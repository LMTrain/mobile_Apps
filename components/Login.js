/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import Myform from './Myform';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
        <Image
        style={styles.logo}
          source={require('./images/lcologo.png')}
         />

         <Text style={styles.title}>A simple login App</Text>
        </View>
        <View style={styles.myform}>
          <Myform />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282830',
    width: Dimensions.get('window').width,

  },
  logocontainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#fff',
    marginTop: 10,
  },
  myform: {
    flex: 1,
  },
});
