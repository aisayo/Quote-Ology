import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import SearchBar from '../common/SearchBar';
import { Header } from '../common/Header';
import QuotesList from '../../components/QuotesList';
import { Card } from '../common/Card';

export default class Quotes extends Component {

  render() {
    return (
      <View style={styles.quotescontainer}>
        <Header text='Quotes' />
        <SearchBar />
        <QuotesList />
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