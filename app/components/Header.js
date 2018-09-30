import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { Header } from 'react-native-elements'

 class HeaderContainer extends Component {
  render() {
    return (
      <View>
          <View>
            <Header 
                backgroundColor='rgb(25, 117, 183)'
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Quote-Ology', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
          </View>
          <View>
          <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
        />
          </View>
      </View>
    )
  }
}

export default HeaderContainer;