import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


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
    },
    pic:{
        height: 75,
        width: 75,
        borderRadius: 25,
    },
    textPanel:{
        flexDirection: "column",
        marginLeft: 15,
    },
})

export default AppListItem;