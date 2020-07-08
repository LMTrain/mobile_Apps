import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
    render() {
        return (
            <View style={styles.card}>
                <Text>{this.props.joke}</Text>
            </View>
        )
    }
}

class NoMoreClass extends React.Component {
    render() {
        return (
            <View style={styles.card}>
                No More Jokes
            </View>
        )
    }
}

export default class Tinder extends React.Component {
    render() {
        return (
            <SwipeCards
                cards={this.props.joke}
                renderCard={(jokeObject) => <Card joke={jokeObject.joke}/>}
            />
        )
    }
}


const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 300,
        borderRadius: 10,
        borderColor: '#ea394b',
        borderWidth: 2,
        backgroundColor: '#04b1ff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})