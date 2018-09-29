import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'

 class Header extends Component {
  render() {
    return (
      <View>
        <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
        />
        <Text> Header Component </Text>
      </View>
    )
  }
}

export default Header;