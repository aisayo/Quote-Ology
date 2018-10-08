import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { SignedIn } from './navigator/Router';

class App extends React.Component {
  render() {
    return (
      <View style={styles.app}> 
        <StatusBar barStyle="light-content" />
        <SignedIn /> 
      </View>
    )
  };
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
});

export default App;

