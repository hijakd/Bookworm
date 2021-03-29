import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Modal,
  Button,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppStyles from "../configs/AppStyles";
import AppText from "./AppText";
import AppColors from "../configs/AppColors";
import AppScreen from "./AppScreen";
import AppPickerItems from "./AppPickerItems";

function AppPicker({ data, icon, placeholder, numColumns }) {
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
          <FlatList
            numColumns={numColumns}
            data={data}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <AppPickerItems
                onPress={() => console.log(item.label)}
                label={item.label}
                icon={item.icon}
                backgroundColor={item.backgroundColor}
              />
            )}

            // <AppText>{item.label}</AppText>}
          />
        </AppScreen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});

export default AppPicker;
