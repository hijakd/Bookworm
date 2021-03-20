import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppScreen from './AppScreen';
import AppColors from '../configs/AppColors';
import AppListItem from '../components/AppListItem';

function HomeScreen(props) {
    return (
        <AppScreen style={styles.container}>
            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons 
                    name="library"
                    size={68}
                    color={AppColors.primaryColor}/>
            </View>
            <View style={styles.profileContainer}>
                {/* <Text>"Blah, blah, blah..."</Text> */}
                <AppListItem image={require("../../assets/BillyIdol.jpg")} title="Billy Idol" subtitle="Rebel Rocker"/>
                {/* <AppListItem title="Billy Idol" subtitle="Rebel Rocker"/> */}
            </View>
            
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:AppColors.otherColor,
        padding: 25, // for SafeAreaView check OS in AppScreen and pad there for iOS
    },
    welcomeContainer: {
        //   backgroundColor: 'red',
          justifyContent:'center',
          alignItems:'center',
          marginTop:50,
      },
      profileContainer:{
        marginTop: 100,
      },
});

export default HomeScreen;