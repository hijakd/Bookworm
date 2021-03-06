import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppStyles from "../configs/AppStyles";

function AppIcon({
  name,
  size = 40,
  iconColor = "black",
  backgroundColor,
  borderRadius = size / 2,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        borderRadius,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.6} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default AppIcon;
