import { Button, Pressable, StyleSheet, Text, View } from "react-native";

const DummyScreen = ({ navigation }: any) => {
  const handleOpenDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          <Text style={styles.highlight}>Drawer Navigation </Text>연습중!
        </Text>
        <View style={styles.btn}>
          <Pressable
            onPress={handleOpenDrawer}
            style={({ pressed }) => pressed && styles.pressedBtn}
          >
            <Text style={styles.text}>Open Menu</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default DummyScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    color: "red",
  },
  text: {
    color: "white",
  },
  btn: {
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
    margin: 20,
  },
  pressedBtn: {
    opacity: 0.7,
  },
});
