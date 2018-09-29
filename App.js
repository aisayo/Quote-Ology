import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './components/screens/Login';
import HeaderContainer from './components/Header';

class App extends React.Component {
  render() {
    return (
      <View style={styles.app}> //app is parent 
          <HeaderContainer /> //child
          <Login /> //child
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(166, 187, 221)'
  },
})

export default App;