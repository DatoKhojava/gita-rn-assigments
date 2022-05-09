import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//api data
import data from "../api/book.json";

const windowWidth = Dimensions.get("window").width;

function onPressHandle(id) {
  console.log(id);
}

const Item = ({ id, title, publisher, cover }) => (
  <TouchableOpacity style={styles.itemStyle} onPress={() => onPressHandle(id)}>
    <Image
      style={{ width: windowWidth / 2 - 50, height: 200 }}
      source={{
        uri: `https:${cover}`,
      }}
    />
    <Text>{title}</Text>
    <Text>{publisher}</Text>
  </TouchableOpacity>
);

function CatalgueScreen() {
  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      title={item.title}
      publisher={item.publisher}
      cover={item.cover}
    />
  );
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    margin: 10,
    width: Math.floor((windowWidth - 40) / 2),
  },
});

export default CatalgueScreen;
