import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import AppListItem from "../components/AppListItem";
import AppColors from "../configs/AppColors";
import AppScreen from "../components/AppScreen";

const authors = [
    {
        id: 1,
        name: "Jane Harper",
        image: require("../images/Author1.jpeg"),
    },
    {
        id: 2,
        name: "J.K. Rowling",
        image: require("../images/Author2.jpeg"),
    },
];

function MyAuthorsScreen(props) {
    return (
        <AppScreen style={styles.authorContainer}>
            <FlatList
                data={authors}
                keyExtractor={(author) => author.id.toString()}
                renderItem={({ item }) => (
                    <AppListItem title={item.name} image={item.image} />
                )}
                ItemSeparatorComponent={() => (
                    <View style={styles.listSeperator} />
                )}
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
});

export default MyAuthorsScreen;
