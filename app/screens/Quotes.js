import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { Header, Card } from '../components/common';
import QuotesList from '../components/QuotesList';
import SearchBar from '../components/common/SearchBar';

class Quotes extends Component {

  state = {
    quotes: []
  }

  componentWillMount() {
    this.setState({ quotes: [{ title: 'test'}, {title: 'test2'}] })
  }
  
  renderQuotes() {
    return this.state.quotes.map((quote) => <Card key={quote.title}><Text>{quote.title}</Text></Card>)
  }

  render() {
    return (
      <View style={styles.quotescontainer}>
        <Header text='Quotes' />
        <SearchBar />
        <QuotesList renderQuotes={this.renderQuotes()}/>
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

export default Quotes;