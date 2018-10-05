import React from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

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
        screen: Register,
        navigationOptions: {
            headerTitle: 'Register',
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            headerTitle: 'Reset Password'
        },
    }
})

export const SignedIn = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
    },
    Quotes: {
        screen: QuotesIndex
    },
    Settings: {
        screen: Settings
    }
})
