import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function AppTextInput(icon, displayText) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={icon}/>
            <TextInput style={styles.textInput}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
    },
    textInput:{
        
    }
})

export default AppTextInput;