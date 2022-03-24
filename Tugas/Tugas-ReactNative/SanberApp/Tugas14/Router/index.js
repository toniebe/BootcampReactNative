import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../../Tugas11/Login";
import About from "../../Tugas11/About";
import Register from "../../Tugas11/Register";
import { UserContext } from "../Context/UserProvider";

const Stack = createNativeStackNavigator();

export default function Router() {
  const { isSigned } = useContext(UserContext);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {isSigned ? (
          <Stack.Screen
            name="AboutScreen"
            component={About}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="LoginScreen"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="RegisterScreen" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
