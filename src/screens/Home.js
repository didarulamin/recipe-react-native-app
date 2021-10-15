import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import RECIPES from "./../../data";

const renderItem = ({ item, index }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{
          uri: item.imageURL,
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subTitle}>Ingredients :</Text>
        {item.ingredients.map(({ name, quantity }, id) => (
          <Text key={name} style={styles.steps}>
            {id + 1} - {quantity} {name}
          </Text>
        ))}
        <Text style={styles.subTitle}>Step by step Guidelines :</Text>
        {item.steps.map((element, id) => (
          <Text key={element} style={styles.steps}>
            {id + 1} - {element}
          </Text>
        ))}
      </View>
    </View>
  );
};

const Home = () => {
  const [data, setData] = useState(RECIPES);
  const filterRecipe = (text) => {
    const filteredList = RECIPES.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setData(filteredList);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={filterRecipe}
        style={styles.search}
        placeholder="search text"
      ></TextInput>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  search: {
    padding: 20,
    borderColor: "red",
    borderRadius: 20,
    borderWidth: 1,
    margin: 10,
    width: 360,
  },
  card: {
    borderColor: "red",
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
    margin: 18,
  },
  cardImage: {
    height: 200,
  },
  infoContainer: {
    margin: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    margin: 10,
  },
  steps: {
    fontSize: 16,
    textAlign: "justify",
  },
});

export default Home;
