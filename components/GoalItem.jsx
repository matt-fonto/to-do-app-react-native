import { Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ id, text, handleDelete }) => {
  function onDelete() {
    handleDelete(id);
  }

  return (
    <Pressable onPress={onDelete}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
