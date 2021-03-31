import React from "react";
import { View, Text, Button, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Test1 from "../screens/TestScreen1";
import Test2 from "../screens/TestScreen2";

const AppStack = createStackNavigator();

const TestNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Test1" component={Test1} />
    <AppStack.Screen name="Test2" component={Test2} />
  </AppStack.Navigator>
);

export default TestNavigator;
