import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import AppStyles from './AppStyles';


function AppText({children}) {
    return (
        <Text style={styles.text}> {children} </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir-Roman',
    }
})

export default AppText;