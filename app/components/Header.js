import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Header } from 'react-native-elements'

 class HeaderContainer extends Component {
  render() {
    return (
      <View>
          <View>
            <Header 
                backgroundColor='rgb(175, 161, 181)'
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: this.props.text, style: { color: '#fff' } }}
            />
          </View>
          <View>
            <StatusBar barStyle="light-content" />
          </View>
      </View>
    )
  }
}

export default HeaderContainer;