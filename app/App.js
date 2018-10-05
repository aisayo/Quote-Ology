import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

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
  }
})

export default App

