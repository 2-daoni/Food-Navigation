import { useEffect, useLayoutEffect, useState } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";

const MealsOverViewScreen = ({ route, navigation }: any) => {
  const [id, setId] = useState<any>();

  const showMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(id) >= 0;
  });

  const renderItem = (item: any) => {
    return <MealItem item={item.item} navigation={navigation} />;
  };

  useEffect(() => {
    if (typeof route.params.categoryId !== "undefined") {
      setId(route.params.categoryId);
    }
  }, [route.params.categoryId]);

  useLayoutEffect(() => {
    const Title = CATEGORIES.find((item) => item.id === id)?.title;
    navigation.setOptions({ title: Title });
  }, [id, navigation]);

  return <MealsList items={showMeals} renderItem={renderItem} />;
};

export default MealsOverViewScreen;
