import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
	const Stack = createStackNavigator();
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="HomeScreen" component={HomeScreen} />
				</Stack.Navigator>
				<SafeAreaProvider></SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
