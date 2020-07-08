import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Input from './Components/Input/Input';

// props are a channel to pass info from an instance to a class
export default function App() {


  return (
    <View style={styles.container}>
      <Input
          value={'Apples'}
          onChange={(value) => this.setState({ value: value})}
      />
      <Text>Open up App.js to start working</Text>
      <Text>Adding a StyleSheet</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 50
  }
});
