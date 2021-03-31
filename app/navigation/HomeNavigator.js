import React from "react";
import { View, Text, Button, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import BooksScreen from "../screens/BooksScreen";
import MyAuthorsScreen from "../screens/MyAuthorsScreen";
import NewBookScreen from "../screens/NewBookScreen";
import TabNavigator from "./TabNavigation";

const AppStack = createStackNavigator();

const HomeNavigator = () => (
  <AppStack.Navigator mode="modal">
    <AppStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen name="Books" component={BooksScreen} />
    <AppStack.Screen
      name="Authors"
      component={MyAuthorsScreen}
      // options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default HomeNavigator;
