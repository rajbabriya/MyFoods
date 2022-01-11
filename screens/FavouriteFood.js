import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavouriteFood = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Favourite Foods Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavouriteFood;
