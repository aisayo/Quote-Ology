import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FormInput } from 'react-native-elements';

export default class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.securityquestioncontainer}>
          <Text style={styles.text}>This will be a security question:</Text>
          <FormInput placeholder="Answer..." inputStyle={styles.input}/>
        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(252, 204, 248)',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    width: 350,
    alignSelf: 'center',
  },
  text: {
    paddingBottom: 25,
    color: 'white',
    fontSize: 30,
    fontFamily: 'Cochin',
    alignSelf: 'center'
  },
  securityquestioncontainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 350,
    height: 500,
  }
})