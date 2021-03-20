import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppScreen from './AppScreen';
import AppColors from '../configs/AppColors';

function HomeScreen(props) {
    return (
        <AppScreen style={styles.container}>
            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons 
                    name="library"
                    size={68}
                    color={AppColors.primaryColor}/>
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
})

export default HomeScreen;