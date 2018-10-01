import React, { Component } from 'react'
import { View, StyleSheet, Button, ImageBackground } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import LoginForm from '../../components/LoginForm'

class Login extends Component {
  render() {

      const navigate = this.props.navigation.navigate

    return (
      <View style={styles.loginformcontainer}>
          <LoginForm />
            <Button 
                title='Sign Up'
                onPress={() => { navigate('Signup') }}
            />
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
    backgroundimg: {
        position: 'relative',
        resizeMode: 'cover'
    }
})

export default Login;