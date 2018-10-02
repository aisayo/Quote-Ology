import React, { Component } from 'react'
import {View, StyleSheet } from 'react-native'

import { HeaderContainer } from '../components/common/Header'
import LikedQuotes from './LikedQuotes';
import Welcome from '../components/common/Welcome';

export default class Home extends Component {
  render() {
    return (
        <View style={styles.homecontainer}>
            <HeaderContainer text={'Home'}/>
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