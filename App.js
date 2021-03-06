import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import AppColors from './app/configs/AppColors';

export default function App() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons 
        name = "library"
        size = {68}
        color = {AppColors.primaryColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // using a defined colour palette "AppColor.js" in ./app/configs
    backgroundColor: AppColors.otherColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
