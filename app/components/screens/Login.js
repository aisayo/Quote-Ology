import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, ImageBackground } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


class Login extends Component {
  render() {
    return (
      <View style={styles.loginformcontainer}>
          <View style={styles.login}>
            <FormInput 
                placeholder='Username...'
            />    
            <FormInput 
                secureTextEntry={true} 
                placeholder='Password...'
            />

            <Button 
                title='Sign In'
                onPress={() => {alert('Login')}}
                style={styles.button}
            />
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    loginformcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        borderRadius: 10,
        borderWidth: 1.0,
        borderColor: 'white',
        width: 250,
        height: 300,
    },
    backgroundimg: {
        position: 'relative',
        resizeMode: 'cover'
    }
})

export default Login;