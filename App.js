import React from 'react';
import {ImageBackground, StyleSheet, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import LoginScreen from './app/assets/screens/LoginScreen';
import RegisterScreen from './app/assets/screens/RegisterScreen';
import AppButton from './app/assets/components/AppButton';
import AppScreen from './app/assets/screens/AppScreen';
import AppStyles from './app/assets/configs/AppStyles';
import TestScreen from './app/assets/screens/TestScreen';
import AuthNavigator from './app/assets/navigation/AuthNavigator';
import HomeScreen from './app/assets/screens/HomeScreen';


export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer> 

    // <HomeScreen/>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
  },
  
});
