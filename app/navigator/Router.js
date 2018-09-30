import React from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from '../components/screens/Login';
import Register from '../components/screens/Register';
import ForgotPassword from '../components/screens/ForgotPassword'


export const SignedOut = createStackNavigator({
    Login: {
        screen: Login,
    },
    Signup: {
        screen: Register
    },
    ForgotPassword: {
        screen: ForgotPassword
    }
})

// export default SignedOut;