import React from 'react'
import { View, Text, Button, Image } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import BooksScreen from '../screens/BooksScreen';
import MyAuthorsScreen from '../screens/MyAuthorsScreen';


const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Authors" component={MyAuthorsScreen}/>
        <AppStack.Screen name="Books" component={BooksScreen}/>
        <AppStack.Screen name="Home" component={HomeScreen}/>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{/*title: 'Return to Hell!',*/ 
                headerTitleStyle: {fontWeight: 'bold'}, 
                /*headerRight: () => (<Button 
                                        onPress={() => alert('This is a button!')}
                                        title="From Hell"
                                    />)*/
            }}
        />            
        <AppStack.Screen name="Register" component={RegisterScreen}/>
    </AppStack.Navigator>

)

export default AuthNavigator;