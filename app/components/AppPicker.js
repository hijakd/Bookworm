import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppStyles from "../configs/AppStyles";
import AppText from "./AppText";
import AppColors from "../configs/AppColors";

function AppPicker({ icon, placeholder, ...otherProps }) {
  return (
    <View style={AppStyles.pickerContainer}>
      <MaterialCommunityIcons name={icon} size={28} />
      <AppText style={AppStyles.pickerText}>{placeholder}</AppText>
      <MaterialCommunityIcons name="chevron-down" size={28} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default AppPicker;
