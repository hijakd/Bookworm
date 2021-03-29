import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import App from "../../App";
import AppStyles from "../configs/AppStyles";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

function AppPickerItems({ onPress, label, icon, backgroundColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={AppStyles.pickerItems}>
      <AppIcon
        name={icon}
        iconColor="white"
        backgroundColor={backgroundColor}
      />
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
export default AppPickerItems;
