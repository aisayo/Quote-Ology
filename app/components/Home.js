import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Header from './Header'
import LikedQuotes from './LikedQuotes';
import ProfilePic from './ProfilePic';

export default class Home extends Component {
  render() {
    return (
        <View style={styles.homecontainer}>
            <Header text={'Home'}/>
                <View style={styles.welcome}>
                    <Text style={{fontSize: 20}}> Welcome User!</Text> 
                </View>
                <ProfilePic />
                <LikedQuotes />
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
    }
})