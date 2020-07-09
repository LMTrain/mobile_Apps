import React from 'react';
//CSS, text, container,
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import axios from 'axios';

var booksArray = [];
var itemsBooksArray = [];
export default class Input extends React.Component {

  state = {
    books: [],
    items: [],
  }

  fetchData () {
    console.log('this is the value: ', this.props.value);
    // fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
    // fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.value}&maxResults=40&orderBy=newest&key=AIzaSyD5c7Uuj4hd7FPRO9A9o4zhWaCTsffKrNc`)
    // .then((response) => {return response.json() })
    //once info is given, we want to update our parents state
    // We want to share this data with another component, via our parents
    // .then((data) => console.log ('Data: ', data.items))
    // .then((data) => this.props.updateBooks(data.items))
   
    // .then((data) => this.props.updateJokes(data.value))
    axios.get(``)
    // .then((response) => {return response.json() })
    .then(res => {
      if(res.data.items !== null) {
        booksArray = res.data.items
        console.log('THIS IS ALL BOOKS: ', booksArray[1].volumeInfo.title)
        this.displayBooks();
      }else{
        console.log('EMPTY')
      }
    })
    .catch(err => console.log(err));   
        
  }
  displayBooks = () => {   
    const shortText = (text, maxLength = 750) => {
      if (!text) { return ' '}
      if (text.length <= maxLength) { return text }
    
      return text.substr(0, maxLength) + '...'
    }    

    for (var i = 0;  i < booksArray.length; i++) { 
      let bookId = String(booksArray[i].etag)      
      let bookName = String(booksArray[i].volumeInfo.title)
      let bookDescription = String(booksArray[i].volumeInfo.description)
      let bookAuthor = String(booksArray[i].volumeInfo.authors)
      let bookPublishDate = String(booksArray[i].volumeInfo.publishedDate)
      if (booksArray[i].volumeInfo.imageLinks == null) {
        bookThumbnail = 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg'         
      }else{
        bookThumbnail = String(booksArray[i].volumeInfo.imageLinks.thumbnail)   
      }        
    
      if (booksArray[i].saleInfo.saleability === "NOT_FOR_SALE") {
        bookPrice = Number(0.00)          
      }else{
        bookPrice = String(booksArray[i].saleInfo.retailPrice.amount)          
      }
      

      let authorLabel = "  Author : "
      let pulishedLabel = "  Pulished Date : "
      let displayPrice = "  Book Price : "
      bookDescription = shortText(bookDescription) + "\n" + "\n" + authorLabel + bookAuthor + "\n" + pulishedLabel + bookPublishDate + "\n" + displayPrice + "$" + bookPrice;

      itemsBooksArray.push({"_id": bookId, "name": bookName, "description": bookDescription, "thumbnail": bookThumbnail, "price": bookPrice })
    }     
    this.setState({items: itemsBooksArray})   
    // console.log('THIS IS ITEMS BOOK ARRAY: ', itemsBooksArray)  
    this.props.updateBooks(itemsBooksArray)
  }
  
  render() {
   
    //return data, i.e result of excuting function

    //Instance is one instance/child of class with specific attributes called props(short)/properties
    return (
      <View style={styles.container}>
        <Text>Search For Books</Text>
        <TextInput
          keyboardType={'phone-pad'}
          value={this.props.value}
          style={styles.input}
          type="text"
          placeholder="Search for books"
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
    marginTop: -150,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 30,
    width: 200,
    borderColor: 'gray',
    borderRadius: 200,
    borderWidth: 2,
    textAlign: 'center'
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
