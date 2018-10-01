import React from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Login from '../components/screens/Login';
import Register from '../components/screens/Register';
import ForgotPassword from '../components/screens/ForgotPassword'
import Home from '../components/Home';
import QuotesIndex from '../components/QuotesIndex';
import Settings from '../components/Settings';


export const SignedOut = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    Signup: {
        screen: Register
    },
    ForgotPassword: {
        screen: ForgotPassword
    }
})

export const SignedIn = createBottomTabNavigator({
    Home: {
        screen: Home
    },
    Quotes: {
        screen: QuotesIndex
    },
    Settings: {
        screen: Settings
    }
})
