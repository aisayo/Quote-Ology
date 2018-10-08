import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { Header } from '../common/Header';
import { ProfilePic } from '../common/ProfilePic'

export const Home = () => {

    return (
        <View style={styles.homecontainer}>
            <Header text={'Home'}/>
            <ProfilePic src={require('../../../assets/img/profileimg1.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    homecontainer: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)',
    },
})