import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { FormInput, Button } from 'react-native-elements';

export default class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameInput = (username) => {
        this.setState({ username })
    }

    handlePasswordInput = (password) => {
        this.setState({ password })
    }

  render() {
    return (
        <View style={styles.login}>

            <FormInput 
                placeholder='Username...'
                containerStyle={styles.inputcontainer}
                onChangeText={this.handleUsernameInput}
            />    
            <FormInput 
                secureTextEntry={true} 
                placeholder='Password...'
                containerStyle={styles.inputcontainer}
                onChangeText={this.handleUsernameInput}
            />

            <Button 
                title='Sign In'
                onPress={() => { console.log('signin') }}
                transparent={true}
                textStyle={{ fontSize: 30 }}
            />

            <Button 
                title='Forgot Password?'
                onPress={() => { this.props.navigate('ForgotPassword')}}
                transparent={true}
                textStyle={{ fontSize: 15 }}
            />

        </View>
    )
  }
}

const styles = StyleSheet.create({
    login: {
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2.5,
        borderLeftColor: 'rgb(131, 7, 247)',
        borderRightColor: 'rgb(247, 7, 171)',
        borderBottomColor: 'rgb(239, 21, 119)',
        borderTopColor: 'rgb(207, 13, 229)',
        width: 250,
        height: 250,
        backgroundColor: 'rgba(228, 210, 210, 0.6)'
    },
    inputcontainer: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
    }
})