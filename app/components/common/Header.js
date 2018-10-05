import React from 'react'
import { View, StatusBar } from 'react-native'
import { Header } from 'react-native-elements'

 export const HeaderContainer = (props) => {
  return (
    <View>

        <View>
          <Header 
              backgroundColor='rgb(175, 161, 181)'
              centerComponent={
                { text: props.text, 
                  style: { color: '#fff', fontSize: 20 } 
                }
              }
          />
        </View>

        <View>
          <StatusBar barStyle="light-content" />
        </View>
        
    </View>
  )

 }

