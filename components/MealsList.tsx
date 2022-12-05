import { FlatList, StyleSheet, View } from "react-native";

type Props = {
  items: any;
  renderItem: any;
};

const MealsList = ({ items, renderItem }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
