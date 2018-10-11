import React from 'react';
import { Text, StyleSheet } from 'react-native';


const Welcome = (props) => {
    
    return(
        <Text style={styles.textStyle}>Welcome, {props.name}!</Text>
        )
}

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        paddingLeft: 25,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    }
})

export { Welcome };

