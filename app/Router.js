import React from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './components/screens/Login';


export const SignedOut = createStackNavigator({
    Login: {
        screen: Login,
    }
})

// export default SignedOut;