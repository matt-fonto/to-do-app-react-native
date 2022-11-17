import { Text, View } from "react-native";
import React, { Component } from "react";

export class Flexbox extends Component {
  render() {
    return (
      // Parent element
      <View
        style={{
          padding: 50,
          flexDirection: "row",
          justifyContent: "center",
          //   width: "80%",
          //   height: 300,
          alignItems: "flex-start",
        }}
      >
        {/* // box 1 */}
        <View
          style={{
            backgroundColor: "red",
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text>1</Text>
        </View>

        {/* box 2 */}
        <View
          style={{
            backgroundColor: "green",
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text>2</Text>
        </View>

        {/* box 3 */}
        <View
          style={{
            backgroundColor: "purple",
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text>3</Text>
        </View>
      </View>
    );
  }
}

export default Flexbox;
