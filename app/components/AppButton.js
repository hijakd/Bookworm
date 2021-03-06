import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import AppColors from '../configs/AppColors';

function AppButton({title}) {
    return (
        <View style={styles.button}>
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: AppColors.secondaryColor,
    }
})

export default AppButton;
