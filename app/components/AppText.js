import React from 'react';
import { Text, Stylesheet } from 'react-native';

function AppText(children) {
    return (
        <Text style={styles.text}> {children} </Text>
    );
}

const styles = Stylesheet.create({
    text:{
        fontsize: 20,
    }
})

export default AppText;