import React, {useState} from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'



export default function TestScreen(props) {

    const [isEnabled, setIsEnabled] = useState(false)

    return (
        <View style={styles.container}>
            <Switch value={isEnabled} onValueChange={
                (input => setIsEnabled(input))
            }/>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})
