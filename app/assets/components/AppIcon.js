import React from 'react';
import { StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function AppIcon({name, size, iconColor, backgroundColor}) {
    return (
        <View style={{width: size, height: size, backgroundColor, borderRadius: size/2, alignItems:"center", justifyContent:"center"}}>
            <MaterialCommunityIcons name={name} size={size*0.5}/>
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default AppIcon;