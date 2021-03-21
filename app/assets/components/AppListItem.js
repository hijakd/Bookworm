import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppColors from '../configs/AppColors';
import AppText from './AppText';
import AppStyles from '../configs/AppStyles';


function AppListItem({image, title, subtitle}) {
    return (
        <View style={AppStyles.listPanel}>
            <Image source={image} style={AppStyles.pic}/>
            <View style={AppStyles.textPanel}>
                <AppText style={AppStyles.textTitle}>{title}</AppText>
                {subtitle && <AppText style={AppStyles.textSubtitle}>{subtitle}</AppText>}
            </View>
        </View>
    );
}


export default AppListItem;