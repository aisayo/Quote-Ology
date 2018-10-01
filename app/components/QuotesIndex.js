import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import SearchBar from './SearchBar';

export default class QuotesIndex extends Component {
  render() {
    return (
      <View style={styles.quotescontainer}>
      <SearchBar />
        <View style={styles.text}>
          <Text> Quotes index </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quotescontainer: {
    flex: 1,
    justifyContent: 'center',

},
  text: {
      alignItems: 'center'
  }
}
)