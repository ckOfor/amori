import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import './src/i18n';
import Landing from "./src/screens/Landing"; // Import i18n configuration

const Stack = createNativeStackNavigator ();
const queryClient = new QueryClient ();

export default function App () {
	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{
						headerStyle: {
							// backgroundColor: colors.background,
						},
						headerShown: false
						// headerTintColor: colors.text,
					}}
				>
					<Stack.Screen name="Home" component={Landing} options={{title: 'Todo App'}}/>
				</Stack.Navigator>
			</NavigationContainer>
		</QueryClientProvider>
	);
}
