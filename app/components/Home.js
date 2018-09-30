import React, { Component } from 'react'
import { Text, View, StyleSheet  } from 'react-native'
import Header from './Header'

export default class Home extends Component {
  render() {
    return (
        <View style={styles.homecontainer}>
            <Header text={'Home'}/>
            <View style={ styles.text }>
                <Text> Home </Text>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    homecontainer: {
        flex: 1,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}
)