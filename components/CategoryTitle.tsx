import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  color: string;
  onPress: (item: any) => void;
};

const CategoryTitle = ({ title, color, onPress }: Props) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.activeBtn]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    shadowColor: "#111",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    borderRadius: 8,
  },
  btn: { flex: 1 },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  activeBtn: {
    opacity: 0.5,
  },
});
