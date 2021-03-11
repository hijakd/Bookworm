import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import AppTextInput from '../../components/AppTextInput';
import AppStyles from '../../configs/AppStyles';


function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <AppTextInput 
                icon="email"
                placeholder="Email Address"
                placeholderTextColor='indigo'
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:100,
        
    }
})


export default LoginScreen;