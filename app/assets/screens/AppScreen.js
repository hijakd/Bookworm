import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
// import Constants from 'expo-constants';
import AppStyles from "../configs/AppStyles";

function AppScreen({ children, style }) {
    return (
        <SafeAreaView style={[AppStyles.screen, style]}>
            <View style={styles.paddingView}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    paddingView: {
        padding: 10,
    },
});

export default AppScreen;
