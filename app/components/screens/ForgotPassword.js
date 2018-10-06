import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FormInput, Button } from 'react-native-elements';

export default class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.securityquestioncontainer}>
          <Text style={styles.text}>Forgot your Password?</Text>
          <Text style={styles.text}>Enter your email to find your account</Text>
          <FormInput placeholder="Email..." inputStyle={styles.input}/>
          <Button 
              title='Find My Acct.'
              outline={true}
              buttonStyle={styles.button}
              />
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
    width: 300,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white'
  },
  text: {
    paddingBottom: 25,
    color: 'white',
    fontSize: 30,
    fontFamily: 'Cochin',
    alignSelf: 'flex-start'
  },
  securityquestioncontainer: {
    marginTop: 50,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    width: 350,
    height: 500,
  },
  button: {
    marginTop: 10,
    width: 150,
    alignSelf: 'center'
  }
})