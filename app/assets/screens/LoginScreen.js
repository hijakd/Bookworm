import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Formik} from 'formik';
import * as Yup from 'yup';


import AppColors from '../configs/AppColors';
import AppStyles from '../configs/AppStyles';
import AppScreen from './AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';


 const valSchema = Yup.object().shape({
     email: Yup.string().required().email().label("Email"),
     password: Yup.string().required().min(4).max(8).label("Password"),
 });

function LoginScreen(props) {

    return (
        <AppScreen style={styles.container}>
            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons 
                    name="library"
                    size={68}
                    color={AppColors.primaryColor}/>
            </View>

            <Formik
                initialValues={{email:'', password:'',}}
                onSubmit={values => console.log(values)}
                validationSchema={valSchema}
            >
            {({handleChange, handleSubmit, errors}) => (
            <>
                <View style={styles.textInputContainer}>
                    <AppTextInput
                        autoCapitalize= "none"
                        autoCorrect= {false}
                        icon= "email"
                        placeholder= "Email Address"
                        keyboardType= "email-address"
                        textContentType= "emailAddress"
                        onChangeText= {handleChange("email")}
                    />
                    <AppText style={"errorText"}>{errors.email}</AppText>
                    <AppTextInput
                        autoCapitalize= "none"
                        autoCorrect= {false}
                        icon= "lock"
                        placeholder= "Password"
                        secureTextEntry  // this sets secureTextEntry to true
                        textContentType= "password"
                        onChangeText= {handleChange("password")}
                    />
                    <AppText style={{color:"red", fontSize:16}}>{errors.password}</AppText>
                </View>
                <AppButton title="Login" onPress={handleSubmit}/>
            </>
            )}
            </Formik>
            
        </AppScreen>   
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:AppColors.otherColor,
        padding: 25, // for SafeAreaView check OS in AppScreen and pad there for iOS
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    textInputContainer:{
        marginTop: 50,
        marginBottom: 30,
    }
})


export default LoginScreen;