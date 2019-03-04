import React from "react";
import Root from "./src/app";
import Loading from './src/components/Loading';

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
    window.setTimeout(() => {
      this.setState({ isReady: true });
    }, 1000);
  }

  render() {
    if (!this.state.isReady) {
      return (<Loading backgroundColor="#3EC3D6" textColor="#FFFFFF" />);
    }

    return <Root />;
  }
};

