import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export const ProfilePic = () => {
    return (
      <View style={styles.profilepicture}>
        <Text> Profile Pic </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    profilepicture: {
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
        width: 50,
        height: 50,
        marginTop: 20,
        marginLeft: 20,
    }
})