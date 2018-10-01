import React, { Component } from 'react'
import { Text, View, StyleSheet  } from 'react-native'

import Header from './Header'
import LikedQuotes from './LikedQuotes';

export default class Home extends Component {
  render() {
    return (
        <View style={styles.homecontainer}>

            <Header text={'Home'}/>

            <View style={styles.welcome}>
                <Text style={{fontSize: 20}}> Welcome User!</Text> 
            </View>

            <View style={styles.profilepicture}>
                <Text>Profile Pic</Text>
            </View>

            <View style={styles.likedquotescontainer}>
                <LikedQuotes />
            </View>

        </View>
    )
  }
}

const styles = StyleSheet.create({
    homecontainer: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)',
    },
    welcome: {
        alignItems: 'center',
        marginTop: 20,
    },
    profilepicture: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
        width: 50,
        height: 50,
        marginTop: 20,
        marginLeft: 20,
    },
    likedquotescontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1.5,
        height: 200,
        width: 200
    }
}
)