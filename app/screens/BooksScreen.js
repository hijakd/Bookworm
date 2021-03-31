import React from "react";
import { StyleSheet, View } from "react-native";
import AppCard from "../components/AppCard";
import AppColors from "../configs/AppColors";
import AppScreen from "../components/AppScreen";
import DataManager from "../configs/DataManager";

const getBooks = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  // console.log(commonData.getBooks(user));
  return commonData.getBooks(user);
};

function BooksScreen(props) {
  const bookList = getBooks();
  console.log(bookList);

  return (
    <AppScreen style={styles.bookContainer}>
      <AppCard
        title="Harry Potter"
        subtitle="read on the train"
        image={require("../assets/images/Book2Cover.jpeg")}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    flex: 1,
    backgroundColor: AppColors.primaryColor,
    // padding: 10,
  },
});

export default BooksScreen;
