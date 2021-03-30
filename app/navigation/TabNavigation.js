import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import BooksScreen from "../screens/BooksScreen";
import MyAuthorsScreen from "../screens/MyAuthorsScreen";
import NewBookScreen from "../screens/NewBookScreen";
import AppColors from "../configs/AppColors";

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
  <AppTab.Navigator
    tabBarOptions={{
      activeTintColor: "tomato",
      activeBackgroundColor: AppColors.primaryColor,
      inactiveTintColor: "gray",
      inactiveBackgroundColor: AppColors.secondaryColor,
      labelStyle: { fontSize: 20 },
    }}
  >
    <AppTab.Screen name="Home" component={HomeScreen} />
    <AppTab.Screen name="New Books" component={NewBookScreen} />
    <AppTab.Screen name="My Books" component={BooksScreen} />
  </AppTab.Navigator>
);

const styles = StyleSheet.create({});

export default TabNavigator;
