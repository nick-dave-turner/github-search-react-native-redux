// @flow
import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

type Props = {
  setSearchTerm: (searchTerm: string) => void
};

const SearchInput = (props: Props) => (
  <View>
    <TextInput
      placeholder="GitHub username..."
      onChangeText={value => props.setSearchTerm(value)}
      style={styles.searchInput}
    />
  </View>
);

const styles = StyleSheet.create({
  searchInput: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1
  }
});

export default SearchInput;
