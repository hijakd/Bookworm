import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

export default function Test2(props) {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});
