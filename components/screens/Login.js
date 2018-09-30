import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


class Login extends Component {
  render() {
    return (
      <View style={styles.logincontainer}>
          <View style={styles.login}>
            <Text style={styles.signin}>Sign In</Text>
            <FormInput 
                placeholder='Username...'
            />    
            <FormInput 
                secureTextEntry={true} 
                placeholder='Password...'
            />

            <Button 
                title='Login'
                onPress={() => {alert('Login')}}
            />
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    logincontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    login: {
        borderRadius: 10,
        borderWidth: 1.0,
        borderColor: 'white',
        width: 250,
        height: 300,
    },
    signin: {
        fontWeight: 'bold',
        fontSize: 20,
    }
})

export default Login;