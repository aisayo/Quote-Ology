import React, { Component } from 'react'
import {View, StyleSheet } from 'react-native'

import {Header} from '../common/Header';
import LikedQuotes from '../LikedQuotes';
import Welcome from '../common/Welcome';

export default class Home extends Component {
  render() {
    return (
        <View style={styles.homecontainer}>
            <Header text={'Home'}/>
            {/* <Welcome username={'Aysan'}/> */}
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