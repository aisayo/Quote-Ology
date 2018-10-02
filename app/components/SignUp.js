import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

export const SignUp = () =>{
    return (
      <View >
        <Text style={styles.text}>Don't have an account?</Text>
        <Button 
                title='Sign Up'
                onPress={() => { this.props.navigate('Signup') }}
                transparent={true}
                textStyle={{ fontSize: 30 }}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white', 
        marginTop: 50, 
        marginBottom: 0,
    }
})


