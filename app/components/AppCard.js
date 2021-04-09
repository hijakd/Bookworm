import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import AppColors from '../configs/AppColors';


function AppCard({title, subtitle, image, category}) {
    return (
        <View style={styles.cardContainer}>
            {isFinite(image)? <Image source={image} style={styles.cardImage}/> : <Image source={{uri: image}} style={styles.cardImage}/>}
            <Text style={styles.cardText}>{title}</Text>
            <Text style={styles.cardSubText}>{subtitle}</Text>
            <Text style={styles.cardSubText}>{category}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:AppColors.secondaryColor,
        // height:100,
        borderRadius: 20,
        overflow:"hidden",
        // padding: 10,
        marginBottom: 25,
    },
    cardImage:{
        height: 150,
        width: "100%",
    },
    cardText:{
        marginLeft: 15,
        fontWeight: "bold",
        fontSize: 18,
    },
    cardSubText:{
        marginLeft: 20,
        fontSize: 14,
        fontStyle: 'italic',
    },
})

export default AppCard;