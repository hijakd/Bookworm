import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppScreen from './AppScreen';
import AppColors from '../configs/AppColors';
import AppListItem from '../components/AppListItem';
import AppIcon from '../components/AppIcon';
import AppStyles from '../configs/AppStyles';

function HomeScreen(props) {
    return (
        <AppScreen style={AppStyles.outerContainer}>
            <View style={AppStyles.homeContainer}>
            {/* <View style={styles.welcomeContainer}> */}
                <MaterialCommunityIcons 
                    name="library"
                    size={68}
                    color={AppColors.primaryColor}/>
            </View>
            <View style={AppStyles.profileContainer}>
                <AppListItem image={require("../../assets/images/BillyIdol.jpg")} title="Billy Idol" subtitle="Rebel Rocker"/>
            </View>
            
            <AppIcon 
                name="book-open-variant"
                size= {40}
                iconColor= "black"
                backgroundColor= "white"
            />
        </AppScreen>
    );
}

// const styles = StyleSheet.create({
//     outerContainer:{
//         flex:1,
//         // backgroundColor:AppColors.otherColor,
//         backgroundColor:"red",
//         padding: 25, // for SafeAreaView check OS in AppScreen and pad there for iOS
//     },
//     welcomeContainer: {
//         //   backgroundColor: 'red',
//         justifyContent:'center',
//         alignItems:'center',
//         marginTop:50,
//     },
//     profileContainer:{
//         marginTop: 100,
//     },
// });

export default HomeScreen;