import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {StyleSheet, Text, ImageBackground, Platform, View } from 'react-native'
import AppText from '../../components/AppText';
import AppScreen from './AppScreen';
import AppColors from '../../configs/AppColors';

const blurRadiusValue = Platform.OS === 'android' ? 0.7 : 5.5;

function WelcomeScreen(props) {
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
                            color={AppColors.primaryColor}/>
                        <AppText>Welcome to Bookworm</AppText>
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
          backgroundColor: 'red',
          justifyContent:'center',
          alignItems:'center',
          marginTop:50,
      }
})

export default WelcomeScreen;