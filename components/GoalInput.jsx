import { View, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const GoalInput = ({ handleAddGoal }) => {
  const [userInput, setUserInput] = useState("");

  function handleInput(enteredText) {
    setUserInput(enteredText);
    // console.log(enteredText); // individual letters
  }

  function onAdd() {
    // console.log(userInput);
    handleAddGoal(userInput);
    setUserInput("");
  }

  return (
    // {/* input area */}
    <View style={styles.inputContainer}>
      {/* We want to handle 2 events here:
        1. the value of the input
        2. the click of the button */}
      <TextInput
        style={styles.textInput}
        placeholder="What are your tasks?"
        onChangeText={handleInput}
        value={userInput} //this allows us to set the value after the input
      />
      <Button title="Add Goal" onPress={onAdd} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, //it will take 1/6 of space
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    borderRadius: 5,
    marginRight: 4,
    padding: 4,
  },
});
