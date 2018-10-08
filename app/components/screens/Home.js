import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { Header } from '../common/Header';
import { ProfilePic } from '../common/ProfilePic'

export const Home = () => {

    return (
        <View style={styles.homeStyle}>
            <Header text={'Home'}/>
            <View style={styles.profileStyle}>
                <ProfilePic src={require('../../../assets/img/profileimg1.jpg')}/>
                <Text style={styles.textStyle}>Welcome, Aysan Isayo!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeStyle: {
    },
    profileStyle: {
        flexDirection: 'row',
    },
    textStyle: {
        alignSelf: 'center',
        paddingLeft: 25,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    }
})