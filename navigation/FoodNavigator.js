import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Categories from "../screens/Categories";
import CategoriesItem from "../screens/CategoriesItems";
import ItemDetails from "../screens/ItemDetails";

import FavouriteFood from "../screens/FavouriteFood";
import Colors from "../constants/Colors";
import { createBottomTabNavigator } from "react-navigation-tabs";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const FoodsNavigator = createStackNavigator(
  {
    CategoriesScreen: {
      screen: Categories,
      navigationOptions: {
        headerTitle: "Food Categories",
      },
    },
    CategoriesItemsScreen: {
      screen: CategoriesItem,
    },
    ItemDetailsScreen: ItemDetails,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.customBlue : Colors.customSky,
      },
      headerTintColor: "white",
    },
  }
);

// const FoodsTabsNavigator = createBottomTabNavigator({
//   Meals: {
//     // initialRouteName: Categories,
//     screen: FoodsNavigator,
//   },
//   Favourites: FavouriteFood,
// });

export default createAppContainer(FoodsNavigator);
