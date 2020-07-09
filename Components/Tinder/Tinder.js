import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';



class Card extends React.Component {
    render() {
        // console.log('THIS IS TINDER PROPS:', this.props.book)
        return (
            <View style={styles.card}>
                <Image 
                    source={{uri: this.props.book}}
                    style={{width: 200, height: 300}} />
                
            </View>
        )
    }
}
class Details extends React.Component {
    render() {
        return (
            <View style={styles.detail}>
                <Text>{this.props.bookDesc}</Text>
            </View>
        )
    }
}

class NoMoreCards extends React.Component {
    render() {
        return (
            <View>
                <Text>No Book Displayed</Text>
            </View>
        )
    }
}

export default class Tinder extends React.Component {
    
    
    
    handleAccept () {
        console.log('I like this book')
    }

    handleReject () {
        console.log('I dont like this book')
    }
    render() {
        // console.log('THIS IS PRPS BOOKS:', this.props.books)
        return (
            <SwipeCards
                // cards={this.props.jokes}
                cards={this.props.books}
                // renderCard={(jokeObject) => <Card joke={jokeObject.joke}/>}
                renderCard={(bookObject) => 
                    <>
                        <Card book={bookObject.thumbnail}/> 
                        <Details bookDesc={bookObject.description}/>
                    </>
                        }
                renderNoMoreCards={() => <NoMoreCards />}
                handleYup={this.handleAccept}
                handleNope={this.handleReject}
            />
        )
    }
}


const styles = StyleSheet.create({
    card: {
        marginTop: -280,
        marginLeft: 55,
        width: 300,
        height: 300,
        borderRadius: 10,
        // borderColor: '#ea394b',
        // borderWidth: 2,
        // backgroundColor: '#04b1ff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detail: {
        marginTop: -100,
        marginBottom: 100,
        marginLeft: 20,
        marginRight: 15,
    }
})