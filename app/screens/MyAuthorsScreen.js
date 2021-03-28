import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import AppListItem from "../components/AppListItem";
import AppColors from "../configs/AppColors";
import AppScreen from "../components/AppScreen";
import AppIcon from "../components/AppIcon";
import AppStyles from "../configs/AppStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const intialAuthorList = [
  {
    id: 1,
    name: "Jane Harper",
    image: require("../assets/images/Author1.jpeg"),
  },
  {
    id: 2,
    name: "J.K. Rowling",
    image: require("../assets/images/Author2.jpeg"),
  },
];

// const [deletedAuthors, setDeletedAuthors] = useState("");

function MyAuthorsScreen(props) {
  const [refreshing, setRefreshing] = useState(false);
  const [authors, setAuthors] = useState(intialAuthorList);
  const handleDelete = (author) => {
    const deleted = intialAuthorList.filter((item) => item.id === author.id); // extending the lect vid to create a "recycle bin"
    const newAuthorList = authors.filter((item) => item.id !== author.id);
    // const deleted = (item) => item.id === author.id;
    setAuthors(newAuthorList);
    console.log(deleted);
  };

  // setDeletedAuthors(deleted);

  return (
    <AppScreen style={styles.authorContainer}>
      <FlatList
        data={authors}
        keyExtractor={(author) => author.id.toString()}
        refreshing={refreshing}
        onRefresh={() => setAuthors(intialAuthorList)}
        renderItem={({ item }) => (
          <AppListItem
            title={item.name}
            image={item.image}
            onPress={() => console.log(item)}
            onSwipeLeft={() => (
              <View style={styles.deleteView}>
                <TouchableOpacity onPress={() => handleDelete(item)}>
                  <AppIcon
                    name="trash-can"
                    size={AppStyles.pic.height * 0.75}
                    iconColor={AppColors.otherColor}
                    backgroundColor={AppColors.primaryColor}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.listSeperator} />}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  authorContainer: {
    backgroundColor: AppColors.otherColor,
    flex: 1,
  },
  listSeperator: {
    width: "100%",
    height: 1,
    backgroundColor: AppColors.secondaryColor,
    marginBottom: 10,
  },
  deleteView: {
    backgroundColor: AppColors.secondaryColor,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyAuthorsScreen;
