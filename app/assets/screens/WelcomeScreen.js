import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {StyleSheet, Text, ImageBackground, Platform, View } from 'react-native'
import {useNavigation} from '@react-navigation/native';

import AppText from '../components/AppText';
import AppScreen from './AppScreen';
import AppColors from '../configs/AppColors';
import AppButton from '../components/AppButton'; 


const blurRadiusValue = Platform.OS === 'android' ? 0.7 : 5.5;

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            <ImageBackground
                source={require("../background.jpg")}
                style={styles.background}
                blurRadius={blurRadiusValue}>

                    <View style={styles.welcomeContainer}>
                        <MaterialCommunityIcons 
                            name="library"
                            size={68}
                            color={AppColors.white}/>
                        <AppText>Welcome to Bookworm</AppText>
                    </View>
                    <View style={styles.buttonContainer}>
                        <AppButton title="Login" onPress={ () => navigation.navigate("Login")}/>
                        <AppButton title="Register" color="secondaryColor" onPress={ () => navigation.navigate("Register")}/>
                    </View>            
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
      },
      welcomeContainer: {
        //   backgroundColor: 'red',
          justifyContent:'center',
          alignItems:'center',
          marginTop:50,
      },
      buttonContainer:{
        // backgroundColor: 'red',
        marginTop: 350,
        marginEnd: 20,
        justifyContent:'space-between',
        height: 150,
        width: '50%',
        alignSelf: 'flex-end',
      }
})

export default WelcomeScreen;