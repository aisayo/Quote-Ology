import React, { Component } from 'react'
import { Text, View, StyleSheet  } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={ styles.text }>
        <Text> Home </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}
)