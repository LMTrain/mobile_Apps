// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Input from './Components/Input/Input';
import Tinder from './Components/Tinder/Tinder';

export default class App extends React.Component {

  state = {
    value: '',
    jokes: [],
    books: [],
  }

// props are a channel to pass info from an instance to a class
render() {
  // console.log('THIS IS APP BOOKS:', this.state.books)
    return (
      <View style={styles.container}>
        
        <Input
            updateBooks={(books) => this.setState({books: books})}
            // updateJokes={(jokes) => this.setState({ jokes: jokes })}
            value={this.state.value}
            
            onChange={(value) => this.setState({ value: value})}
        />
        
        <Tinder
          books={this.state.books}
            // jokes={this.state.jokes}
        />
        {/* <StatusBar style="auto" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    color: 'red',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 5,
    width: 100,
    height: 50
  }
});
