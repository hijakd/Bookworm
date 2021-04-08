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
        renderItem= {({item}) => 
          <AppCard 
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            category={item.category}
          />}
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
