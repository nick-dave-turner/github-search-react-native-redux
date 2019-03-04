// @flow
import React from "react";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";
import { SearchButtonContainer } from "../../containers/Users";

const Footer = () => (
  <KeyboardAvoidingView behavior="position" enabled>
    <View style={styles.footer}>
      <SearchButtonContainer />
    </View>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "column"
  }
});

export default Footer;
