import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import firebase from 'firebase';

import { SignedIn } from './navigator/Router';


class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAmr2g0YBOXmS3d83-z6KD5f6sdc0zvwxw",
      authDomain: "quote-ology.firebaseapp.com",
      databaseURL: "https://quote-ology.firebaseio.com",
      projectId: "quote-ology",
      storageBucket: "quote-ology.appspot.com",
      messagingSenderId: "862709675473"
    })
  }
  
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

