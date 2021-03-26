import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppScreen from "../components/AppScreen";
import AppColors from "../configs/AppColors";
import AppListItem from "../components/AppListItem";
import AppIcon from "../components/AppIcon";
import AppStyles from "../configs/AppStyles";

function HomeScreen(props) {
    return (
        <AppScreen style={AppStyles.outerContainer}>
            <View style={AppStyles.homeContainer}>
                {/* <View style={styles.welcomeContainer}> */}
                <MaterialCommunityIcons
                    name="library"
                    size={68}
                    color={AppColors.primaryColor}
                />
            </View>
            <View style={AppStyles.profileContainer}>
                <AppListItem
                    image={require("../../assets/images/BillyIdol.jpg")}
                    title="Billy Idol"
                    subtitle="Rebel Rocker"
                />
            </View>
            <View style={AppStyles.linksContainer}>
                <AppListItem
                    title="My Books"
                    IconComponent={
                        <AppIcon
                            name="book-open-variant"
                            size={50}
                            iconColor={AppColors.otherColor2}
                            backgroundColor={AppColors.secondaryColor}
                        />
                    }
                />
                <AppListItem
                    title="My Authors"
                    IconComponent={
                        <AppIcon
                            name="account-heart"
                            size={50}
                            iconColor={AppColors.otherColor2}
                            backgroundColor={AppColors.secondaryColor}
                        />
                    }
                />
            </View>

            {/* <AppIcon 
                name="book-open-variant"
                size= {40}
                iconColor= "black"
                backgroundColor= "white"
            /> */}
        </AppScreen>
    );
}

const styles = StyleSheet.create({});

export default HomeScreen;
