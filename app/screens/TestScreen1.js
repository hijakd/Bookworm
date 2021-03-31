import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Test1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Test1</Text>
      <Button
        title="Click Here"
        onPress={() =>
          navigation.navigate("Test2", { message: "Hello World!!" })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
