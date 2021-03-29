import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppStyles from "../configs/AppStyles";
import AppText from "./AppText";
import AppColors from "../configs/AppColors";

function AppPicker({ icon, placeholder, ...otherProps }) {
  return (
    <View style={AppStyles.inputContainer}>
      <MaterialCommunityIcons name={icon} size={24} />
      <TextInput style={AppStyles.textInput} {...otherProps} />
      <AppText>{placeholder}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({});

export default AppPicker;
