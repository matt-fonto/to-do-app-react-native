import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList, //loads elements and the user scrolls
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  function handleAddGoal(userInput) {
    // console.log("this is the user input " + userInput);
    // we get our current list, then we add the new items
    if (!userInput) {
      // the user didn't put a valid input
      alert("please enter a valid input");
    }

    setGoalsList((currentGoals) => [
      ...currentGoals,
      { text: userInput, id: Math.random().toString() },
    ]);
  }

  // function handleEdit() {}

  function handleDelete(id) {
    let filteredList = goalsList.filter((goal) => goal.id !== id);
    // // console.log("goals list" + goalsList);
    setGoalsList(filteredList);
  }

  return (
    <View style={styles.appContainer}>
      {/* Input */}
      <GoalInput handleAddGoal={handleAddGoal} />

      {/* the list of saved input */}
      {/* This View controls how much space this area should take*/}
      <View style={styles.goalsContainer}>
        {/* Flatlist is a self-closing item */}
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            // itemData is an object generated by FlatList which
            // contains our data and some meta data
            // console.log(itemData.item.text);
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                handleDelete={handleDelete}
              />
            );
          }}
          // these 2 values will be provided by FlatList
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // the parent container is taking all the height
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5, // it will take 5/6 of the space
  },
});
