import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { Header, ProfilePic, Welcome } from '../components/common';

export default class Home extends Component {
    render(){
        return(
            <View >
                <Header text={'Home'}/>
                <View style={styles.profileStyle}>
                    <ProfilePic src={require('../../assets/img/profileimg1.jpg')}/>
                    <Welcome name={'Aysan Isayo'}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileStyle: {
        flexDirection: 'row',
    }
})