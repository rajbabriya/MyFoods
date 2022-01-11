import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const CategoryGrid = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        {/* <ImageBackground
          source={{ uri: itemData.item.img }}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
            width: "100%",
            height: "100%",
            opacity: 0.7,
          }}
        > */}
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.gridItemText}>{props.title}</Text>
        </View>
        {/* </ImageBackground> */}
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: "5%",
    height: 140,
    elevation: 3,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.26,
    borderRadius: 10,
    shadowRadius: 10,

    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItemText: {
    color: "black",
    fontWeight: "700",
    // fontFamily: "tusj",
    fontSize: 22,
  },
});

export default CategoryGrid;
