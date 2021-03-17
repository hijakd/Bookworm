import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'


import AppTextInput from '../components/AppTextInput'
import AppScreen from './AppScreen'
import AppColors from '../configs/AppColors'
import AppButton from '../components/AppButton'



function RegisterScreen(props) {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <AppScreen style={styles.container}>
        <View style={styles.welcomeContainer}>
            <MaterialCommunityIcons 
                name="library"
                size={68}
                color={AppColors.primaryColor}/>
        </View>
        <View style={styles.textInputContainer}>
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

export default RegisterScreen;