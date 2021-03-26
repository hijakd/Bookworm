import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppCard from '../components/AppCard';
import AppColors from '../configs/AppColors';
import AppScreen from './AppScreen';


function BooksScreen(props) {
    return (
        <AppScreen style={styles.bookContainer}>
            <AppCard 
                title="Harry Potter" 
                subtitle="read on the train"
                image={require("../images/Book2Cover.jpeg")}/>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    bookContainer:{
        flex:1,
        backgroundColor:AppColors.primaryColor,
        padding: 10,
    },
})

export default BooksScreen;