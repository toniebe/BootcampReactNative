import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

import AboutScreen from "../Pages/AboutScreen";
import AddScreen from "../Pages/AddScreen";
import HomeScreen from "../Pages/HomeScreen";
import LoginScreen from "../Pages/LoginScreen";
import ProjectScreen from "../Pages/ProjectScreen";
import SettingScreen from "../Pages/SettingScreen";
import SkillProjectScreen from "../Pages/SkillProjectScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AboutScreen" component={AboutScreen} />
      <Tab.Screen name="AddScreen" component={AddScreen} />
      <Tab.Screen name="SkillProject" component={SkillProjectScreen} />
    </Tab.Navigator>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="App" component={MainApp} />
      <Drawer.Screen name="AboutScreen" component={AboutScreen} />
    </Drawer.Navigator>
  );
};
