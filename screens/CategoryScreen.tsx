import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryTitle from "../components/CategoryTitle";

const CategoryScreen = ({ navigation }: any) => {
  const handlePress = (itemData: any) => {
    navigation.navigate("MealsOverViewScreen", { categoryId: itemData.id });
  };

  const renderItem = (data: any) => {
    return (
      <CategoryTitle
        title={data.item.title}
        color={data.item.color}
        onPress={() => {
          handlePress(data.item);
        }}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      horizontal={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CategoryScreen;
