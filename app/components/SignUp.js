import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

export default class SignUp extends Component {
    render() {
        return (
            <View >
              <Text style={styles.text}>Don't have an account?</Text>
              <Button 
                      title='Sign Up'
                      onPress={() => { props.navigate('Signup') }}
                      transparent={true}
                      textStyle={{ fontSize: 30 }}
              />
            </View>
          )
          }
}

const styles = StyleSheet.create({
    text: {
        color: 'white', 
        marginTop: 50, 
        marginBottom: 0,
    }
})


