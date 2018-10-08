import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import SearchBar from '../common/SearchBar';
import { Header } from '../common/Header';

export default class Quotes extends Component {
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