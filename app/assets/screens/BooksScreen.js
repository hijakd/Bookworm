import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppColors from '../configs/AppColors';
import AppScreen from './AppScreen';


function BooksScreen(props) {
    return (
        <AppScreen style={styles.bookContainer}>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    bookContainer:{
        backgroundColor:AppColors.primaryColor,
        
    },
})

export default BooksScreen;