import React from "react";
import { StyleSheet, View } from "react-native";
import AppCard from "../components/AppCard";
import AppColors from "../configs/AppColors";
import AppScreen from "../components/AppScreen";
import DataManager from "../configs/DataManager";
import { FlatList } from "react-native-gesture-handler";
import AppText from "../components/AppText";

const getBooks = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getBooks(user);
}

function BooksScreen(props) {
  const bookList = getBooks();
  console.log(bookList);

  return (
    <AppScreen style={styles.bookContainer}>

      <FlatList 
        data={bookList}
        keyExtractor= {book => book.bookid.toString()}
        renderItem= {({item}) => <AppText>{item.title}</AppText>}
      />
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
