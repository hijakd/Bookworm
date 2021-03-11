import {ImageBackground, StyleSheet, Text } from 'react-native';
import React from 'react';
import AppScreen from './app/assets/screens/AppScreen';
import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import LoginScreen from './app/assets/screens/LoginScreen';
import AppStyles from './app/components/AppStyles';


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
