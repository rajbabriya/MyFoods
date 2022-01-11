import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";
// import { AppLoading } from "expo";
import AppLoading from "expo-app-loading";
import FoodsNavigator from "./navigation/FoodNavigator";
import Colors from "./constants/Colors";
import { enableScreens } from "react-native-screens";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    // "dunkin-sans": //require("./assets/fonts/Dunkin Sans.otf"),
    // "dunkin-sans-bold": require("./assets/fonts/Dunkin Sans Bold.otf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    drivecorps: require("./assets/fonts/drivecorps.ttf"),
    "black-light1": require("./assets/fonts/TheBlacklight.ttf"),
    "drive-corps-3D": require("./assets/fonts/drivecorps3d.ttf"),
    "rockabilly-1": require("./assets/fonts/Rockabilly.ttf"),
    tusj: require("./assets/fonts/FFF_Tusj.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <FoodsNavigator style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </FoodsNavigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
