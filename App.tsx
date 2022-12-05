import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./screens/CategoryScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MenuDetailScreen from "./screens/MenuDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#111",
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#111" },
          }}
        >
          <Stack.Screen
            name="CategoryScreen"
            component={CategoryScreen}
            options={{ title: "메뉴카테고리" }}
          />
          <Stack.Screen
            name="MealsOverViewScreen"
            component={MealsOverViewScreen}
          />
          <Stack.Screen name="MenuDetailScreen" component={MenuDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
