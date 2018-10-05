import { AsyncStorage } from 'react-native';



export const USER_ID = 'test'

export const onSignin = () => AsyncStorage.getItem('USER_ID')