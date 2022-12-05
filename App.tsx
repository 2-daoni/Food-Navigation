import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import CategoryMainScreen from "./screens/CategoryMainScreen";
import DummyScreen from "./screens/DummyScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const drawerOptions: any = {
  drawerStyle: {
    backgroundColor: "#111111",
  },
  headerStyle: {
    backgroundColor: "black",
  },
  headerTintColor: "white",
  drawerInactiveTintColor: "white",
  drawerActiveTintColor: "#dad",
  drawerActiveBackgroundColor: "transparent",
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            ...drawerOptions,
          }}
        >
          <Drawer.Screen
            name="CategoryMainScreen"
            component={CategoryMainScreen}
            options={{
              drawerLabel: "Menu Category",
              drawerIcon: ({ color }) => (
                <Ionicons name="home" color={color} size={18} />
              ),
            }}
          />
          <Drawer.Screen
            name="DummyScreen"
            component={DummyScreen}
            options={{
              drawerLabel: "I am dummy!",
              drawerIcon: ({ color }) => (
                <Ionicons name="person" color={color} size={18} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
