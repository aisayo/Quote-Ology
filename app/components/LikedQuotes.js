import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import LikedQuotesList from './LikedQuotesList';

export default class LikedQuotes extends Component {
  render() {
    return (
      <View style={styles.likedquotescontainer}>
        <Text> Most Recently Liked quotes... </Text>
        <LikedQuotesList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    likedquotescontainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: .5,
        width: 350,
        height: 350,
        marginTop: 30,
    }
})