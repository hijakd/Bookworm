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

// const styles = StyleSheet.create({
//     listPanel:{
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     pic:{
//         height: 75,
//         width: 75,
//         borderRadius: 35,
//     },
//     textPanel:{
//         flex: 1,
//         // flexDirection: "column",
//         backgroundColor: AppColors.otherColor2,
//         borderRadius: 10,
//         marginLeft: 15,
//         padding: 10,
//     },
//     textTitle:{
//         fontWeight:"bold",
//     },
//     textSubtitle:{
//         fontSize: 13,
//     },
// })

export default AppListItem;