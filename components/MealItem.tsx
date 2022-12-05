import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ItemTypes = {
  id: any;
  title: any;
  categoryIds: any;
  ingredients: any;
  duration: any;
  affordability: any;
  complexity: any;
  imageUrl: any;
  isVegan: any;
  isVegetarian: any;
};

type Props = { item: ItemTypes; navigation: any };

const MealItem = ({ item, navigation }: Props) => {
  const handlePress = () => {
    navigation.navigate("MenuDetailScreen", {
      title: item.title,
      id: item.id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedBtn}
        onPress={() => {
          handlePress();
        }}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{item.duration}m</Text>
            <Text style={styles.detailItem}>
              {item.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {item.affordability.toUpperCase()}
            </Text>
          </View>
          {/* {item.ingredients.map((item: any) => (
          <Text>{item}</Text>
        ))} */}
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 10,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#111",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  innerContainer: { borderRadius: 8, overflow: "hidden" },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginBottom: 10,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  pressedBtn: {
    opacity: 0.75,
  },
});
