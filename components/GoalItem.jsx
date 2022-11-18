import { Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ id, text, handleDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => handleDelete(id)}
        android_ripple={{ color: "#ddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 5,
    color: "white",
  },
});
