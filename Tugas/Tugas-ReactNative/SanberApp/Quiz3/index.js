import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';
import Login from './Login';
import Home from './Home'

const Stack = createNativeStackNavigator();

export default function index() {
    return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={Home} options={{ headerTitle: 'Daftar Barang' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
