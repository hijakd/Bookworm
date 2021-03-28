import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppColors from "../configs/AppColors";
import AppText from "./AppText";
import AppStyles from "../configs/AppStyles";
import AppIcon from "./AppIcon";

function AppListItem({
  image,
  title,
  subtitle,
  IconComponent,
  onPress,
  onSwipeLeft,
}) {
  return (
    <Swipeable renderRightActions={onSwipeLeft}>
      <TouchableHighlight
        // onPress={() => console.log()}
        onPress={onPress}
        underlayColor={"tomato"}
      >
        <View style={AppStyles.listPanel}>
          {IconComponent}
          {image && <Image source={image} style={AppStyles.pic} />}
          <View style={AppStyles.textPanel}>
            <AppText style={AppStyles.textTitle}>{title}</AppText>
            {subtitle && (
              <AppText style={AppStyles.textSubtitle}>{subtitle}</AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({});

export default AppListItem;
