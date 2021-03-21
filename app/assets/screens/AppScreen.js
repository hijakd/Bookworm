import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import Constants from 'expo-constants';
import AppStyles from '../configs/AppStyles';

function AppScreen({children, style}) {
  return (
    <SafeAreaView style={[AppStyles.screen, style]}>
        {children}
    </SafeAreaView>
  );
}


export default AppScreen;
