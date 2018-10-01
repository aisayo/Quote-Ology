import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class LikedQuotes extends Component {
  render() {
    return (
      <View style={styles.likedquotescontainer}>
        <Text> Most Recently Liked quotes... </Text>
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