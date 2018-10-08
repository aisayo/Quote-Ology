import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

 export const Header = (props) => {

  const { headerStyle, textStyle } = styles;

  return (
    <View style={headerStyle}>
      <Text style={textStyle}>{props.text}</Text> 
    </View>
  )
 }

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'rgb(252, 204, 248)',
    paddingTop: 35,
    paddingBottom: 15,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
  }
})