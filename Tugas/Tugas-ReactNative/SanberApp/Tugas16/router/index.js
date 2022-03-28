import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../pages/Login";
import About from "../pages/About";
import Register from "../pages/Register";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="AboutScreen"
          component={About}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="RegisterScreen" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
