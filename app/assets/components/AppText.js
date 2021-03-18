import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import AppStyles from '../configs/AppStyles';


function AppText({style, children}) {
    return (
        <Text style={[styles.text, style]}> {children} </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir-Roman',
    }
})

export default AppText;