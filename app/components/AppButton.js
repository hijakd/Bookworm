import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View, TouchableOpacityBase } from 'react-native';
import AppColors from '../configs/AppColors';
import AppStyles from '../configs/AppStyles';

function AppButton({title, color="primaryColor", onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[AppStyles.button, {backgroundColor:AppColors[color]}]}>
                <Text style={AppStyles.text}> {title} </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
});

export default AppButton;