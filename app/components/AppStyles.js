import React from 'react';
import { View, StyleSheet } from 'react-native';

function AppStyles(children) {
    return (
        // TODO implement recieve object for styling
        <div></div>
    );
}

const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        marginTop:100,
    },
    
    defaultText:{
        fontSize:20,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir-Roman',
    }
})

export default AppStyles;

