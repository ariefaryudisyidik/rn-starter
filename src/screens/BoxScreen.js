import { StyleSheet, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle} />
      </View>
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  viewTwoParent: {
    height: 100,
    justifyContent: "flex-end",
  },
  viewTwoStyle: {
    width: 50,
    height: 50,
    backgroundColor: "green",
  },
  viewThreeStyle: { width: 50, height: 50, backgroundColor: "purple" },
});
