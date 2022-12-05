import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import CategoryScreen from "./screens/CategoryScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MenuDetailScreen from "./screens/MenuDetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import FavoritesContextProvider from "./store/context/favorite-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const navigatorOptions: any = {
  headerStyle: {
    backgroundColor: "#111",
  },
  headerTintColor: "white",
  contentStyle: { backgroundColor: "#111" },
};

const drawerOptions: any = {
  sceneContainerStyle: {
    backgroundColor: "#111",
  },
  drawerContentStyle: { backgroundColor: "#111" },
  drawerInactiveTintColor: "white",
  drawerActiveTintColor: "#dad",
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        ...navigatorOptions,
        ...drawerOptions,
      }}
    >
      <Drawer.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          title: "Category",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          title: "Favorite",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              ...navigatorOptions,
            }}
          >
            <Stack.Screen
              name="DrawerNavigation"
              component={DrawerNavigation}
              options={{ headerShown: false, title: "Category" }}
            />
            <Stack.Screen
              name="MealsOverViewScreen"
              component={MealsOverViewScreen}
              options={{ title: "메뉴 모아보기" }}
            />
            <Stack.Screen
              name="MenuDetailScreen"
              component={MenuDetailScreen}
              options={{ title: "메뉴 상세보기" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
