import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";

export default function Test2({ route }) {
  return (
    <View style={styles.container}>
      <Text>Test2</Text>
      <Text>{route.params.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
