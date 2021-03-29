import React from "react";
import { StyleSheet, View } from "react-native";
import AppPicker from "../components/AppPicker";

import AppScreen from "../components/AppScreen";
import AppColors from "../configs/AppColors";
import AppStyles from "../configs/AppStyles";

function NewBookScreen(props) {
  return (
    <AppScreen style={AppStyles.outerContainer}>
      <AppPicker placeholder="Categories" icon="apps" />
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
export default NewBookScreen;
