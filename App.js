import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './components/screens/Login';
import HeaderContainer from './components/Header';

class App extends React.Component {
  render() {
    return (
      <View >
        <View>
          <HeaderContainer />
        </View>
        <View >
          <Login />
        </View>
      </View>
    );
  }
}

export default App;