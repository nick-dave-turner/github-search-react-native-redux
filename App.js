import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Root from "./src/app";

export default class App extends React.Component {

  state = {
    isReady: false
  };

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={styles.container}>
          <Text style={styles.loadingText}>LOADING ...</Text>
        </View>
      );
    }

    return <Root />;
  }
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#3EC3D6"
  },
  loadingText: {
    textAlign: "center",
    color: "#FFFFFF"
  }
});
