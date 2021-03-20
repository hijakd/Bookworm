import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppColors from '../configs/AppColors';


function AppListItem({image, title, subtitle}) {
    return (
        <View style={styles.listPanel}>
            <Image source={image} style={styles.pic}/>
            <View style={styles.textPanel}>
                <Text>{title}</Text>
                <Text>{subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listPanel:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    pic:{
        height: 75,
        width: 75,
        borderRadius: 25,
    },
    textPanel:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: AppColors.otherColor2,
        borderRadius: 10,
        marginLeft: 15,
        padding: 10,
    },
})

export default AppListItem;