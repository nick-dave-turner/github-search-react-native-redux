// @flow
import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CardListContainer,
  SearchInputContainer
} from "../../containers/Users";

const Home = () => (
  <View style={styles.container}>
    <Header />
    <View style={styles.content}>
      <SearchInputContainer />
      <CardListContainer />
    </View>
    <Footer />
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100%",
    minHeight: "100%",
    backgroundColor: "#F3F3F3"
  },

  searchInput: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1
  },

  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: 20
  }
});
