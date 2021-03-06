import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import AppColors from './app/configs/AppColors';

const blurRadiusValue = Platform.OS === "android" ? 0.7 : 5.5;

export default function App() {
  return (
    <ImageBackground 
      source = {require("./app/assets/background.jpg")}
      style = {styles.background}
      blurRadius = {0.6}
    />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // using a defined colour palette "AppColor.js" in ./app/configs
  //   backgroundColor: AppColors.otherColor,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  background: {
    flex: 1,
  },
});
