// @flow
import React from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {
  backgroundColor: string,
  textColor: string
};

const Loading = (props: Props) => (
  <View
    style={{
      backgroundColor: props.backgroundColor || "null",
      ...styles.loadingContainer
    }}
  >
    <Text
      style={{
        color: props.textColor || "#000000",
        ...styles.loadingText
      }}
    >
      LOADING ...
    </Text>
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  loadingText: {
    textAlign: "center"
  }
});

export default Loading;
