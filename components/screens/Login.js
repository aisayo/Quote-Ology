import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


class Login extends Component {
  render() {
    return (
      <View>
          <View>
            <FormLabel>Username:</FormLabel>
            <FormInput onChangeText={console.log('typing')}/>    
            <FormLabel>Password:</FormLabel>
            <FormInput />
          </View>
      </View>
    )
  }
}

export default Login;