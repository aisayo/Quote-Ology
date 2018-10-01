import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

import LoginForm from '../../components/LoginForm'
import SignUp from '../SignUp';
import { QuoteOlogy } from '../QuoteOlogy';

class Login extends Component {
  render() {

    const navigate = this.props.navigation.navigate

    return (
        <ImageBackground source={require('../../img/background1.png')} style={styles.backgroundimg}>
            <QuoteOlogy />
            <View style={styles.loginformcontainer}>
                <LoginForm />
                <SignUp />
            </View>
        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    loginformcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    backgroundimg: {
        flex: 1,
        position: 'relative',
    }
})

export default Login;