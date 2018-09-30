import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Login from './components/screens/Login';
import HeaderContainer from './components/Header';
import { SignedOut } from './navigator/Router';

class App extends React.Component {
  render() {
    return (
      <View style={styles.app}> //app is parent
      <ImageBackground source={require('./img/background1.png')} style={styles.backgroundimg}>
        <SignedOut /> //child

      </ImageBackground>
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
    // resizeMode: 'cover'
    }
})

export default App;