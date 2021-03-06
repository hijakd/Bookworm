import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './app/components/AppText';
import AppColors from './app/configs/AppColors';


export default function App() {
  return (
    <View style={styles.container}>
      <AppText>Hello Cactus</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // using a defined colour palette "AppColor.js" in ./app/configs
    backgroundColor: AppColors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
