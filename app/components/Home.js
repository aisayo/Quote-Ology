import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Header from '../components/common/Header'
import LikedQuotes from './LikedQuotes';
import Welcome from '../components/common/Welcome';

export default class Home extends Component {
  render() {
    return (
        <View style={styles.homecontainer}>
            <Header text={'Home'}/>
            <Welcome username={'Aysan'}/>
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
})