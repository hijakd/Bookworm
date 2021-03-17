import React from 'react';
import {ImageBackground, StyleSheet, Text } from 'react-native';

import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import LoginScreen from './app/assets/screens/LoginScreen';
import RegisterScreen from './app/assets/screens/RegisterScreen';
import AppButton from './app/assets/components/AppButton';
import AppScreen from './app/assets/screens/AppScreen';
import AppStyles from './app/assets/configs/AppStyles';


export default function App() {
  return (
    <LoginScreen/>  
    

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
  },
  
});
