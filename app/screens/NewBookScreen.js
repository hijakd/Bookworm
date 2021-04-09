import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import AppButton from "../components/AppButton";

import AppPicker from "../components/AppPicker";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppColors from "../configs/AppColors";
import AppStyles from "../configs/AppStyles";
import DataManager from "../configs/DataManager";

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

function NewBookScreen({navigation}) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("");
  const [titleError, setTitleError] = useState("");
  const [subTitleError, setSubTitleError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  

  const doErrorCheck = () => {
    setTitleError(title.length > 0 ? "" : "Please set a valid Book Title");
    setSubTitleError(subTitle.length > 0 ? "" : "Please set a valid subtitle");
    setCategoryError(category? "" : "Please select a category");
    return ((title.length>0) && (subTitle.length>0) && (category)? true : false);
  }

  const addBook = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();

    const books = commonData.getBooks(user);
    const bookID = books.length+1;
    const newBook = {
      title: title,
      subtitle: subTitle,
      category: category.label,
      bookid: bookID,
      userid: user,
    };

    console.log(newBook);

    commonData.addBook(newBook);
  }

  return (
    <AppScreen style={AppStyles.outerContainer}>
      <AppTextInput 
        icon="book-open-page-variant"
        placeholder="Book Title"
        value={title}
        onChangeText={() => setTitle(inputText)}
        />
        {titleError.length > 0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{titleError}</AppText> : <></>}
      <AppTextInput 
        icon="calendar-month"
        placeholder="Book Read on:"
        value={subTitle}
        onChangeText={() => setSubTitle(inputText)}
        />
        {subTitleError.length > 0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{subTitleError}</AppText> : <></>}

      <AppPicker
        data={genres}
        onSelectItem={item => setCategory(item)}
        data={genres}
        placeholder="Categories"
        icon="apps"
        numColumns={3}
      />
      {categoryError.length > 0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{categoryError}</AppText> : <></>}
      <AppButton title="Add Book" onPress={openImagePickerAsync}/>
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
export default NewBookScreen;
