import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Modal, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppStyles from "../configs/AppStyles";
import AppText from "./AppText";
import AppColors from "../configs/AppColors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AppScreen from "./AppScreen";

function AppPicker({ icon, placeholder, ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={AppStyles.pickerContainer}>
          {icon && <MaterialCommunityIcons name={icon} size={28} />}
          <AppText style={AppStyles.pickerText}>{placeholder}</AppText>
          <MaterialCommunityIcons name="chevron-down" size={28} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <AppScreen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </AppScreen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});

export default AppPicker;
