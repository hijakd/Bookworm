import React from 'react';
import { SafeAreaView } from 'react-native';

function AppScreen({children}) {
  return (
    <SafeAreaView style={styles.screen}>
        {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
  }
})

export default AppScreen;
