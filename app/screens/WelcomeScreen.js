import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  ImageBackground,
  Platform,
  View,
} from "react-native";
// import {useNavigation} from '@react-navigation/native';

import AppText from "../components/AppText";
import AppScreen from "../components/AppScreen";
import AppColors from "../configs/AppColors";
import AppButton from "../components/AppButton";
import AppStyles from "../configs/AppStyles";

const blurRadiusValue = Platform.OS === "android" ? 0.7 : 5.5;

function WelcomeScreen({ navigation }) {
  return (
    <AppScreen>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={AppStyles.welcomeBackground}
        blurRadius={blurRadiusValue}
      >
        <View style={AppStyles.welcomeContainer}>
          <MaterialCommunityIcons
            name="library"
            size={68}
            color={AppColors.white}
          />
          <AppText>Welcome to Bookworm</AppText>
        </View>
        <View style={AppStyles.buttonContainer}>
          <AppButton
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />
          <AppButton
            title="Register"
            color="secondaryColor"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </ImageBackground>
    </AppScreen>
  );
}

const styles = StyleSheet.create({});

export default WelcomeScreen;
