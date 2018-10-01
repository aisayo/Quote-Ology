import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import SearchBar from './SearchBar';
import Header from './Header';

export default class QuotesIndex extends Component {
  render() {
    return (
      <View style={styles.quotescontainer}>
        <Header text='Quotes' />
        <SearchBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quotescontainer: {
    flex: 1,
    backgroundColor: 'white'

  }
})