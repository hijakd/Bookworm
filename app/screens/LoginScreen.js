import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import AppColors from "../configs/AppColors";
import AppStyles from "../configs/AppStyles";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

const valSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(8).label("Password"),
});

const users = [
  {
    name: "Billy Idol",
    email: "billy@idol.com",
    password: "rebel",
  },
  {
    name: "Jon Snow",
    email: "js@gmail.com",
    password: "dead",
  },
];

const validateUser = ({ email, password }) => {
  return (
    users.filter((user) => user.email === email && user.password === password)
      .length > 0
  );
};

function LoginScreen({ navigation }) {
  return (
    <AppScreen style={AppStyles.loginContainer}>
      <View style={AppStyles.welcomeContainer}>
        <MaterialCommunityIcons
          name="library"
          size={68}
          color={AppColors.primaryColor}
        />
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          if (validateUser(values)) {
            console.log(values);
            resetForm();
            navigation.navigate("Home");
          } else {
            resetForm();
            alert("Invalid login details");
          }
        }}
        validationSchema={valSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={AppStyles.textInputContainer}>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                placeholder="Email Address"
                keyboardType="email-address"
                textContentType="emailAddress"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
              />
              {touched.email && (
                <AppText style={{ color: "red", fontSize: 16 }}>
                  {errors.email}
                </AppText>
              )}
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                secureTextEntry // this sets secureTextEntry to true
                textContentType="password"
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              />
              {touched.password && (
                <AppText style={{ color: "red", fontSize: 16 }}>
                  {errors.password}
                </AppText>
              )}
            </View>
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </AppScreen>
  );
}

const styles = StyleSheet.create({});

export default LoginScreen;
