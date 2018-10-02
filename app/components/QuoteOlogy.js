import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const QuoteOlogy = () => {
    return (
        <View>
            <Text style={styles.logo}> Quote-Ology </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 75,
        fontFamily: 'Marker Felt',
        fontWeight: 'bold',
        marginTop: 75,
        marginBottom: -75,
    }
})