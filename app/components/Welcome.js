import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import ProfilePic from './ProfilePic';

export default class Welcome extends Component {
  render() {
    return (
        <View style={styles.welcome}>
            <Text style={{fontSize: 20}}> Welcome, {this.props.username}!</Text> 
            <ProfilePic />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    welcome: {
        alignItems: 'center',
        marginTop: 20,
    }
})