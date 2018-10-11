import React from 'react'
import { Image, StyleSheet } from 'react-native'

const ProfilePic = (props) => {

    const { picStyle } = styles;

    return  <Image style={picStyle} source={props.src} />
}

const styles = StyleSheet.create({
    picStyle: {
        borderRadius: 50,
        width: 100,
        height: 100,
        marginTop: 20,
        marginLeft: 20,
    }
})

export { ProfilePic };