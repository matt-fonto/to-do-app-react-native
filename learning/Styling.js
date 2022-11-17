import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      {/* Button is a self-closing tag in React Native */}
      <Button title="click me" onClick={console.log("I was clicked")} />
      {/* here we are accessing our personalized styles
      styles.styleName */}
      <Text style={styles.dummyText}>Styled text</Text>
      <Text style={styles.dummyText}>Text 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    //the name can be "jelly"
    //our value isn't so flexible, we need to use the specific name
    color: "blue",
    fontSize: "3rem",
    margin: 20,
    borderWidth: 1,
    borderColor: "purple",
    padding: "2rem",
    borderRadius: "1rem",
  },
});
