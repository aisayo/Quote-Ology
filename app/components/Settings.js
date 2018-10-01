import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Header from '../components/common/Header';

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.settingscontainer}>
       <Header text='Settings'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  settingscontainer: {
    flex: 1,
    backgroundColor: 'white'

  }
})