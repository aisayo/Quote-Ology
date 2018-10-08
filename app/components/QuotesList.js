import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Card } from '../components/common/Card';

export default class QuotesList extends Component {

  state = {
    quotes: []
  }

componentDidMount() {
  this.setState({ quotes: [{ title: 'test'}, {title: 'test2'}] })
}

renderQuotes() {
  return this.state.quotes.map((quote) => <Card key={quote.title}><Text>{quote.title}</Text></Card>)
}
  

  render() {
    return (
      <View>
        {this.renderQuotes()}
      </View>
      
    )
  }
}