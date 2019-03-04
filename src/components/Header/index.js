// @flow
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => (
  <View style={styles.header}>
    <View style={styles.headerContent}>
      <Text style={styles.headerText}>GITHUB USER SEARCH</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 30,
    backgroundColor: "#3EC3D6"
  },
  headerContent: {
    padding: 20,
    justifyContent: "center"
  },
  headerText: {
    textAlign: "center",
    color: "#FFFFFF"
  }
});

export default Header;
