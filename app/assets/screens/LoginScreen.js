import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Formik} from 'formik';

import AppColors from '../configs/AppColors';
import AppStyles from '../configs/AppStyles';
import AppScreen from './AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';



function LoginScreen(props) {

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

            <Formik
                initialValues={{email:'', password:'',}}
                onSubmit={values => console.log()}
            >

            </Formik>
            <View style={styles.textInputContainer}>
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
            <AppButton title="Login" onPress={() => console.log(email, password)}/>
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