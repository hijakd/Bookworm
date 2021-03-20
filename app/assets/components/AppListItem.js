import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


function AppListItem({image, title, subtitle}) {
    return (
        <View>
            <Image source={image}/>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default AppListItem;