import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Childe #1</Text>
      <Text style={styles.textTwoStyle}>Childe #2</Text>
      <Text style={styles.textThreeStyle}>Childe #3</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    justifyContent: "flex-start",
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 4,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 4,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 2,
  },
});