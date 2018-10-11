import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from '../components/screens/Login';
import SignupForm from '../components/screens/SignupForm';
import ForgotPassword from '../components/screens/ForgotPassword'
import Home from '../components/screens/Home';
import Quotes from '../components/screens/Quotes';
import Settings from '../components/Settings';


export const SignedOut = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    Signup: {
        screen: SignupForm,
        navigationOptions: {
            headerTitle: 'SignUp',
            headerStyle: {
                backgroundColor: 'rgb(252, 204, 248)'
            }
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            header: null,
        },
    },
})

export const SignedIn = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-home' color={tintColor} size={30} />
            )
        }
    },
    Quotes: {
        screen: Quotes,
        navigationOptions: {
            tabBarLabel: 'Quotes',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-quote' color={tintColor} size={30} />
            )
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-construct' color={tintColor} size={30} />
            )
        }
    }
}, { 
        activeColor: 'white',
        barStyle: { backgroundColor: 'rgb(166, 132, 168)', paddingBottom: 10 },    
})
