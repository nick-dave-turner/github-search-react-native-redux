// @flow
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Card from "../Card";

type Props = {
  data: Array<{ id: string, ...mixed }>,
  loading: boolean,
  error: boolean,
  deleteUser: (id: number) => void
};

export default class CardList extends React.Component<Props> {
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.scroll();
    }
  }

  keyExtractor = item => item.id.toString();

  scroll = () => {
    this.flatListRef.scrollToIndex({ animated: true, index: 0 });
  };

  render() {
    return (
      <View style={styles.cardContainer}>
        <FlatList
          ref={ref => {
            this.flatListRef = ref;
          }}
          data={this.props.data}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <Card {...item} deleteUser={id => this.props.deleteUser(id)} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    marginTop: 10,
    marginBottom: 10
  }
});
