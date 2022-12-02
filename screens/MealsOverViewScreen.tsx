import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

const MealsOverViewScreen = ({ route }: any) => {
  const [id, setId] = useState<any>();

  const showMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(id) >= 0;
  });

  const renderItem = (item: any) => {
    return <MealItem item={item.item} />;
  };

  useEffect(() => {
    if (typeof route.params.categoryId !== "undefined") {
      setId(route.params.categoryId);
    }
  }, [route.params.categoryId]);

  return (
    <View style={styles.container}>
      <FlatList
        data={showMeals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
