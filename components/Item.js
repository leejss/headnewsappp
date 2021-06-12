import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { ListItem } from "react-native-elements";

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  title: {
    color: "black",
    fontSize: 32,
  },
});

export default function Item({ item, navigation, index }) {
  const onPress = () => {
    navigation.navigate("Article", {
      index,
    });
  };
  return (
    <ListItem bottomDivider onPress={onPress}>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
}
