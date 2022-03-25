import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, RegisterScreen, SplashScreen } from "../Features/Auth";
import { NewsListScreen } from "../Features/News";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
	const isSignedIn = useSelector((state) => state.Auth.isSignedIn);

	return (
		<Stack.Navigator>
			{isSignedIn ? (
				<Stack.Screen name="NewsListScreen" component={NewsListScreen} />
			) : (
				<>
					<Stack.Screen
						name="SplashScreen"
						component={SplashScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name="LoginScreen" component={LoginScreen} />
					<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
				</>
			)}
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({});
