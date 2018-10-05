import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

import LoginForm from '../../components/LoginForm'
import SignUp from '../Signup';
import { Logo } from '../Logo';

class Login extends Component {
  render() {

    const navigate = this.props.navigation.navigate

    return (
        <ImageBackground source={require('../../../assets/img/background1.png')} style={styles.backgroundimg}>
            <Logo />
            <View style={styles.loginformcontainer}>
                <LoginForm navigate={navigate}/>
                <SignUp navigate={navigate}/>
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