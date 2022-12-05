import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./CategoryScreen";
import MealsOverViewScreen from "./MealsOverViewScreen";
import MenuDetailScreen from "./MenuDetailScreen";

const Stack = createNativeStackNavigator();

const CategoryMainScreen = () => {
  return (
    <>
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
    </>
  );
};

export default CategoryMainScreen;
