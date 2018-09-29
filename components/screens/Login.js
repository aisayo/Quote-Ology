import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


class Login extends Component {
  render() {
    return (
      <View>
          <View style={styles.login}>
            <Text>Sign In</Text>
            <FormLabel>Username:</FormLabel>
            <FormInput />    
            <FormLabel>Password:</FormLabel>
            <FormInput />
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    login: {
        borderRadius: 4,
        borderWidth: 1.0,
        borderColor: 'black',
        width: 250,
        height: 300,
    }
})

export default Login;