import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppButton from "./app/components/AppButton";
import AppScreen from "./app/components/AppScreen";
import AppStyles from "./app/configs/AppStyles";
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import TestScreen from "./app/screens/TestScreen1";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import TabNavigator from "./app/navigation/TabNavigation";
import TestNavigator from "./app/navigation/TestNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>

    // <NavigationContainer>
    //   <TabNavigator />
    // </NavigationContainer>

    // <NavigationContainer>
    //   <TestNavigator />
    // </NavigationContainer>

    // <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
  },
});
