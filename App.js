import {ImageBackground, StyleSheet, Text } from 'react-native';
import React from 'react';
import AppScreen from './app/assets/screens/AppScreen';
import WelcomeScreen from './app/assets/screens/WelcomeScreen';

export default function App() {
  return (
    <WelcomeScreen/>  
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
  },
  
});
