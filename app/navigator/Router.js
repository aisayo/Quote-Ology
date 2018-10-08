import React from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from '../components/screens/Login';
import SignupForm from '../components/screens/SignupForm';
import ForgotPassword from '../components/screens/ForgotPassword'
import { Home } from '../components/screens/Home';
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
        // navigationOptions: {
        //     tabBarIcon: ({ tintColor, focused }) => {
        //         return <Ionicons name="home" size={30} color={tintColor}/>
        //     }
        // }
    },
    Quotes: {
        screen: Quotes
    },
    Settings: {
        screen: Settings
    }
}, { 
        activeColor: 'white',
        barStyle: { backgroundColor: 'rgb(252, 204, 248)', paddingBottom: 10 },    
})
