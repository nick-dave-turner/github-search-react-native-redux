// @flow
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  getUsers: (search: string) => void,
  searchTerm: string
};

const SearchButton = (props: Props) => (
  <TouchableOpacity
    style={styles.footerButton}
    underlayColor="rgba(73,182,77,1,0.9)"
    onPress={() => props.getUsers(props.searchTerm)}
  >
    <Text style={styles.footerButtonText}>SEARCH</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  footerButton: {
    padding: 20,
    backgroundColor: "#3EC3D6"
  },
  footerButtonText: {
    textAlign: "center",
    color: "#fff"
  }
});

export default SearchButton;
