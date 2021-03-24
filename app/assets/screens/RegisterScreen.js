import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Formik} from 'formik'

import AppButton from '../components/AppButton'
import AppColors from '../configs/AppColors'
import AppScreen from './AppScreen'
import AppTextInput from '../components/AppTextInput'
import AppStyles from '../configs/AppStyles';


function RegisterScreen(props) {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <AppScreen style={AppStyles.loginContainer}>
        <View style={AppStyles.welcomeContainer}>
            <MaterialCommunityIcons 
                name="library"
                size={68}
                color={AppColors.primaryColor}/>
        </View>

        {/* <Formik

        >


        </Formik> */}

        <View style={AppStyles.textInputContainer}>
            <AppTextInput
                autoCapitalize= "words"
                autoCorrect= {false}
                icon= "account"
                placeholder= "Full Name"
                textContentType= "emailAddress"
                onChangeText= {userInput => setUserName(userInput)}
            />  
            <AppTextInput
                autoCapitalize= "none"
                autoCorrect= {false}
                icon= "email"
                placeholder= "Email Address"
                keyboardType= "email-address"
                textContentType= "emailAddress"
                onChangeText= {userInput => setEmail(userInput)}
            />
            <AppTextInput
                autoCapitalize= "none"
                autoCorrect= {false}
                icon= "lock"
                placeholder= "Password"
                secureTextEntry  // this sets secureTextEntry to true
                textContentType= "password"
                onChangeText= {userInput => setPassword(userInput)}
            />                
        </View>
        <AppButton title="Login" onPress={() => console.log(userName, email, password)}/>
    </AppScreen>   
);
}

const styles = StyleSheet.create({
    
});

export default RegisterScreen;