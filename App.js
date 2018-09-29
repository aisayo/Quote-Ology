import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './components/screens/Login';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View >
          <Login />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(25, 117, 183)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;