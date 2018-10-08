import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { Header } from '../common/Header';

export const Home = () => {

    return (
        <View style={styles.homecontainer}>
            <Header text={'Home'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    homecontainer: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)',
    },
})