import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SearchScreen from "./screens/SearchScreen";
import {NavigationContainer} from "@react-navigation/native";
import ResultShowScreen from "./screens/ResultShowScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerTitle : 'Restoran Uygulaması'
        }}>
          <Stack.Screen name={'SearchScreen'} component={SearchScreen} />
            <Stack.Screen name={'ResultsShow'} component={ResultShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
