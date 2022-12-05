import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";

const FavoriteScreen = ({ navigation }: any) => {
  const favoriteMealsCtx = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  const renderItem = (item: any) => {
    return <MealItem item={item.item} navigation={navigation} />;
  };

  return favoriteMeals.length === 0 ? (
    <View style={styles.container}>
      <Text style={styles.text}>🤩 즐겨찾는 음식을 추가해주세요!</Text>
    </View>
  ) : (
    <>
      <MealsList items={favoriteMeals} renderItem={renderItem} />;
    </>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
