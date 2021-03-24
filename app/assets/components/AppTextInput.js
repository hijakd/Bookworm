import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppStyles from '../configs/AppStyles';


function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={AppStyles.inputContainer}>
            <MaterialCommunityIcons name={icon} size={22}/>
            <TextInput style={AppStyles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default AppTextInput;