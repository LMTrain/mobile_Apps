import React from 'react';
//CSS, text, container,
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {

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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take entire height
    backgroundColor: 'red',
    alignItems: 'center', //Horizontally align
    justifyContent: 'center' //Vertically align
  }

  input: {
    height: 40,
    width: 300,
    borderColor: 'green'
  }

})
