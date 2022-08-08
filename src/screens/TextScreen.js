import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  //   const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      {/* <Text>Enter Name:</Text> */}
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        // value={name}
        value={password}
        // onChangeText={(newValue) => setName(newValue)}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {/* <Text>My name is {name}</Text> */}
      {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
