import React from 'react';
//CSS, text, container,
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {

  fetchData () {
    console.log('this is the value: ', this.props.value);
    fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
    .them((response) => {return response.json() })
    //once info is given, we want to update our parents state
    // We want to share this data with another component, via our parents
    .then((data) => console.log ('Data: ', data))
  }
  render() {
    //return data, i.e result of excuting function

    //Instance is one instance/child of class with specific attributes called props(short)/properties
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType={'numeric'}
          value={this.props.value}
          style={styles.input}
          //track changes in text, when ome types something in input field
          //text will be what we type in
          onChangeText={(text) => this.props.onChange(text)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.fetchData()}
        >
          <Text
            style={styles.text}
          >Search</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
//Vertically align
//Horizontally align
// Take entire height
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 2,
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'white'
  }
})
