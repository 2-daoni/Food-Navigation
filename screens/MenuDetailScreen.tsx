import { useContext, useLayoutEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import IconBtn from "../components/IconBtn";

const MenuDetailScreen = ({ navigation, route }: any) => {
  const mealId = route.params.id;

  const favoriteMealsContext = useContext(FavoriteContext);

  const isFavorite = favoriteMealsContext.ids.includes(mealId);

  const item = MEALS.find((item: any) => item.id === mealId);

  const renderItem = ({ item }: any) => {
    return <Text style={styles.text}>- {item}</Text>;
  };

  const handleHeaderBtn = () => {
    if (isFavorite) {
      favoriteMealsContext.removeFavorite(mealId);
    } else {
      favoriteMealsContext.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.title });
  }, [mealId, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconBtn
            icon={isFavorite ? "heart" : "heart-outline"}
            color="white"
            onPress={handleHeaderBtn}
          />
        );
      },
    });
  }, [navigation, handleHeaderBtn, isFavorite]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Let's make <Text style={styles.highlight}>{route.params.title}</Text>
          👩‍🍳
        </Text>
      </View>
      <Image source={{ uri: item?.imageUrl }} style={styles.image} />
      <View style={styles.rowContainer}>
        <Text style={styles.smallDescription}>{item?.complexity}</Text>
        <Text style={styles.smallDescription}>{item?.duration}</Text>
        <Text style={styles.smallDescription}>{item?.affordability}</Text>
      </View>
      <View>
        <Text style={styles.middleTitle}>Ingredients</Text>
        <FlatList
          data={item?.ingredients.map((item: any) => {
            return item;
          })}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Text style={styles.middleTitle}>Steps</Text>
        <FlatList
          data={item?.steps.map((item: any) => {
            return item;
          })}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default MenuDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  titleContainer: {
    marginVertical: 30,
    borderWidth: 3,
    borderColor: "white",
  },
  title: {
    color: "white",
    textAlign: "center",
    marginVertical: 30,
    fontSize: 20,
  },
  middleTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginVertical: 15,
  },
  text: {
    color: "white",
  },
  image: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  highlight: {
    color: "#dea3a3",
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
  smallDescription: {
    margin: 5,
    fontSize: 14,
    color: "white",
  },
});
