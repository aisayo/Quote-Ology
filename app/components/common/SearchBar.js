import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FormInput } from 'react-native-elements'


export default class SearchBar extends Component {
  
  render() {

    const { searchBarStyle, textStyle, formInputStyle } = styles;

    return (
      <View style={searchBarStyle}>
        <Text style={textStyle}>In a mood?</Text>
        <FormInput placeholder='Search here...' containerStyle={formInputStyle} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    borderWidth: .5,
    borderColor: 'gray',
  },
  textStyle: {
    marginLeft: 5,
    fontSize: 20,
    color: 'gray',
  },
  formInputStyle: {
    marginRight: 0,
    width: 250,
    borderBottomWidth: 0,
  }
})


