// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Input from './Components/Input/Input';

export default class App extends React.Component {

  state = {
    value: '',

  }

  render() {
    // console.log('THIS IS APP BOOKS:', this.state.books)
      return (
        <View style={styles.container}>
          
          <Input
              value={this.state.value}
              onChange={(value) => this.setState({ value: value})}
          />
          
        </View>
      );
    }
  }
  



  const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
    padding: 10,
    alignItems: 'center',
    flex: 1,
  },
  button: {
    marginTop: 5,
    width: 100,
    height: 50
  }
});
