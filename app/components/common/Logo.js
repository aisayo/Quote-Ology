import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const Logo = (props) => {
    return <Text style={styles.logoStyle}>{props.logo}</Text>
}

const styles = StyleSheet.create({
    logoStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 75,
        fontFamily: 'Marker Felt',
        fontWeight: 'bold',
        marginTop: 75,
        marginBottom: -75,
    }
})