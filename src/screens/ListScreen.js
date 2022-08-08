import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  //   const friends = [
  //     { name: "Friend #1", key: "1" },
  //     { name: "Friend #2", key: "2" },
  //     { name: "Friend #3", key: "3" },
  //     { name: "Friend #4", key: "4" },
  //     { name: "Friend #5", key: "5" },
  //     { name: "Friend #6", key: "6" },
  //     { name: "Friend #7", key: "7" },
  //     { name: "Friend #8", key: "8" },
  //   ];

  const friends = [
    { name: "Friend #1", age: 11 },
    { name: "Friend #2", age: 12 },
    { name: "Friend #3", age: 13 },
    { name: "Friend #4", age: 14 },
    { name: "Friend #5", age: 15 },
    { name: "Friend #6", age: 16 },
    { name: "Friend #7", age: 17 },
    { name: "Friend #8", age: 18 },
  ];

  return (
    <FlatList
      showsHorizontalScrollIndicator={true}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={style.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const style = StyleSheet.create({
  textStyle: {
    marginHorizontal: 16,
    marginVertical: 50,
  },
});

export default ListScreen;
