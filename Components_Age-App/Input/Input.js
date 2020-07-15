import React from 'react';
//CSS, text, container,
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

var content = null;
export default class Input extends React.Component {

  

  fetchData () {
    console.log('this is the value: ', this.props.value);
    if (this.props.value != '') {
      content = <Text style={styles.ageResult}>Your Age in Dog Years is: {this.props.value * 7}</Text>
    } else {
      content = <Text style={styles.instructions}>Your age in dog years will be displayed here</Text>
    }
      this.resetAgeInput(); 
        
  }
  resetAgeInput = () => { 
    this.props.value = ''
  }
  
  render() {

    return (
      <View style={styles.container}>
        <Text>
            Awesome Age App!
        </Text>
        <Text style={styles.subHeading}>
            Have fun finding your age in dog years!
        </Text>
        <TextInput
          keyboardType='numeric'
          value={this.props.value}
          style={styles.ageInput}
          type ='numeric'
          placeholder='enter your age here...'
          onChangeText={(text) => this.props.onChange(text)}
          autoFocus={true}
          onFocus={this.resetAgeInput}
          />
       
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.fetchData()}
        >
          <Text
            style={styles.text}
          >Enter</Text>
        </TouchableHighlight>
        {content}
      </View>
    )
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
  heading: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#0000CC',
  },
  subHeading: {
    fontSize: 24,
    textAlign: 'center',
    color: '#0000CC',
  },
  ageInput: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#0000CC',
    borderRadius: 0,
    color: '#0000CC',
  },
  ageResult: {
    fontSize: 20,
    padding: 4,
    margin: 10,
    marginTop: 20,
  },
  instructions: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  italic: {
    fontStyle: 'italic',
    fontSize: 15,
  },
  button: {
    marginTop: 5,
    backgroundColor: 'blue',
    height: 20,
    width: 60,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'white'
  }
})
