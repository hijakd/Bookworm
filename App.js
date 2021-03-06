import {StyleSheet, Text } from 'react-native';
import React from 'react';
import AppScreen from './app/assets/screens/AppScreen';

export default function App() {
  return (
    <AppScreen style={styles.container}>
      <Text>Hello Cactus</Text>
    </AppScreen>    
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
  }
});
