import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import SearchBar from '../components/common/SearchBar';
import { HeaderContainer } from '../components/common/Header';

export default class QuotesIndex extends Component {
  render() {
    return (
      <View style={styles.quotescontainer}>
        <HeaderContainer text='Quotes' />
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