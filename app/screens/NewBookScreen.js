import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

import AppPicker from "../components/AppPicker";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppColors from "../configs/AppColors";
import AppStyles from "../configs/AppStyles";

const genres = [
  {
    label: "Adventure",
    value: 21,
    icon: "airballoon",
    backgroundColor: "blue",
  },
  {
    label: "Crime",
    value: 22,
    icon: "police-badge",
    backgroundColor: "green",
  },
  {
    label: "Fiction",
    value: 23,
    icon: "draw",
    backgroundColor: "yellow",
  },
  { label: "Thriller", value: 24, icon: "owl", backgroundColor: "brown" },
];

function NewBookScreen(props) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("");

  return (
    <AppScreen style={AppStyles.outerContainer}>
      <AppTextInput 
        icon="book-open-page-variant"
        placeholder="Book Title"
        value={title}
        onChangeText={() => setTitle(inputText)}
        />
      <AppTextInput 
        icon="calendar-month"
        placeholder="Book Read on:"
        value={subTitle}
        onChangeText={() => setSubTitle(inputText)}
        />

      <AppPicker
        data={genres}
        onSelectItem={item => setCategory(item)}
        data={genres}
        placeholder="Categories"
        icon="apps"
        numColumns={3}
      />
      <AppButton title="Add Book" onPress={() => console.log(title, subtitle, category.label)}/>
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
export default NewBookScreen;
