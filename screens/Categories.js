import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/categoriesData-dummy";
import Colors from "../constants/Colors";
import CategoryGrid from "../components/CategoryGrid";

const Categories = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoriesItemsScreen",
            params: { catId: itemData.item.id },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: Colors.primary }}
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />

    // <View style={styles.screen}>
    //   <Text>The Categories Screen!</Text>
    //   <Button
    //     title="Go To Categories Items"
    //     onPress={
    //       () =>
    //         props.navigation.navigate({ routeName: "CategoriesItemsScreen" })
    //       // props.navigation.replace("CategoriesItemsScreen")
    //     }
    //   />
    // </View>
  );
};

// Categories.navigationOptions = {
//   headerTitle: "Food Categories",
//   headerStyle: {
//     backgroundColor:
//       Platform.OS === "android" ? Colors.customBlue : Colors.customSky,
//   },
//   headerTintColor: "white",
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.customGreen,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Categories;
