import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View, TouchableOpacityBase } from 'react-native';
import AppColors from '../configs/AppColors';

function AppButton({title}) {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text> {title} </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: AppColors.secondaryColor,
        borderRadius: 20,
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AppButton;
