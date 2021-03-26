import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";
import AppColors from "../configs/AppColors";
import AppText from "./AppText";
import AppStyles from "../configs/AppStyles";

function AppListItem({ image, title, subtitle, IconComponent, onPress }) {
    return (
        <TouchableHighlight
            onPress={() => console.log()}
            // onPress={onPress}
            underlayColor={"tomato"}
        >
            <View style={AppStyles.listPanel}>
                {IconComponent}
                {image && <Image source={image} style={AppStyles.pic} />}
                <View style={AppStyles.textPanel}>
                    <AppText style={AppStyles.textTitle}>{title}</AppText>
                    {subtitle && (
                        <AppText style={AppStyles.textSubtitle}>
                            {subtitle}
                        </AppText>
                    )}
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({});

export default AppListItem;
