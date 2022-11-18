import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

const GoalInput = ({ handleAddGoal, showModal, toggleModalOff }) => {
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
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        {/* We want to handle 2 events here:
        1. the value of the input
        2. the click of the button */}
        <TextInput
          style={styles.textInput}
          placeholder="What are your tasks?"
          onChangeText={handleInput}
          value={userInput} //this allows us to set the value after the input
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAdd} color="#5e0acc" />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={toggleModalOff} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, //it will take 1/6 of space
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#311b6b",
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#12043",
    width: "100%",
    borderRadius: 5,
    padding: 15,
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
