import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppTextInput from '../../components/AppTextInput';
import AppColors from '../../configs/AppColors';
import AppStyles from '../../configs/AppStyles';
import AppScreen from './AppScreen';


function LoginScreen(props) {
    return (
        <AppScreen style={styles.container}>
            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons 
                    name="library"
                    size={68}
                    color={AppColors.primaryColor}/>
            </View>
            <AppTextInput
                autoCapitalize= "none"
                autoCorrect= {false}
                icon= "email"
                placeholder= "Email Address"
                keyboardType= "email-address"
                textContentType= "emailAddress"
            />
            <AppTextInput
                autoCapitalize= "none"
                autoCorrect= {false}
                icon= "lock"
                placeholder= "Password"
                secureTextEntry  // this sets secureTextEntry to true
                textContentType= "password"
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:AppColors.otherColor,
        // marginTop:100,
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
})


export default LoginScreen;