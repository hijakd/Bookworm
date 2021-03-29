import React from "react";
import { StyleSheet, View } from "react-native";

import AppPicker from "../components/AppPicker";
import AppScreen from "../components/AppScreen";
import AppColors from "../configs/AppColors";
import AppStyles from "../configs/AppStyles";

const genres = [
  { label: "Adventure", value: 21 },
  { label: "Crime", value: 22 },
  { label: "Fiction", value: 23 },
  { label: "Thriller", value: 24 },
];

function NewBookScreen(props) {
  return (
    <AppScreen style={AppStyles.outerContainer}>
      <AppPicker data={genres} placeholder="Categories" icon="apps" />
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
export default NewBookScreen;
