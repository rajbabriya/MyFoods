import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { CATEGORIES, MEALS } from "../data/categoriesData-dummy";
import MealItem from "../components/MealItem";
import Colors from "../constants/Colors";

const CategoriesItem = (props) => {
  const cid = props.navigation.getParam("catId");
  //console.log(cid);

  const renderMealItems = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "ItemDetailsScreen",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  const mealData = MEALS.filter((meal) => meal.categoryIds.indexOf(cid) >= 0);
  // const selectedCat = CATEGORIES.find((cat) => cat.id === cid);

  return (
    <View style={styles.screen}>
      <FlatList
        data={mealData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItems}
        style={{ width: "100%" }}
      />
      {/* <Text>The Categories Items Screen!</Text>
      <Text>{selectedCat.title}</Text>
      <Button
        title="Go To Item Details"
        onPress={() =>
          props.navigation.navigate({ routeName: "ItemDetailsScreen" })
        }
      /> */}
    </View>
  );
};

CategoriesItem.navigationOptions = (navigationData) => {
  const itemID = navigationData.navigation.getParam("catId");
  // console.log(navigationData);

  const itemName = CATEGORIES.find((cat) => cat.id === itemID);
  return {
    headerTitle: itemName.title,
    // headerStyle: {
    //   backgroundColor:
    //     Platform.OS === "android" ? Colors.customBlue : Colors.customSky,
    // },
    // headerTintColor: "white",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesItem;
