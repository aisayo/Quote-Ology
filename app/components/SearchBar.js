import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FormInput } from 'react-native-elements'


export default class SearchBar extends Component {
  render() {
    return (
      <View>
        <FormInput placeholder='Search...'/>
      </View>
    )
  }
}


