import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';

import Login from './components/screens/Login';
import { SignedOut } from './navigator/Router';

class App extends React.Component {
  render() {
    return (
      <View style={styles.app}> //app is parent
        <StatusBar barStyle="light-content" />
        <SignedOut /> //child
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(166, 187, 221)'
  },
  backgroundimg: {
    flex: 1,
    position: 'relative',
    }
})

export default App;

