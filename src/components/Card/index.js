// @flow
import React from "react";
import { TouchableOpacity, View, Image, Text, Linking } from "react-native";

type Props = {
  id: number,
  avatar_url: string,
  html_url: string,
  login: string,
  deleteUser: (id: number) => void
};

const CardExample = ({
  id,
  avatar_url,
  html_url,
  login,
  deleteUser
}: Props) => {
  const openLink = url => {
    Linking.openURL(url).catch(err => console.error("An error occurred", err));
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardImage}>
        <Image source={{ uri: avatar_url }} style={{ width: 50, height: 50 }} />
      </View>
      <TouchableOpacity
        style={styles.cardContent}
        onPress={() => openLink(html_url)}
      >
        <Text>{login.toUpperCase()}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardDiscard}
        onPress={() => deleteUser(id)}
      >
        <Text style={styles.cardDiscardText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#FFFFFF"
  },
  cardImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50
  },
  cardContent: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  cardDiscard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: "#3EC3D6"
  },
  cardDiscardText: {
    color: "#FFFFFF"
  }
};

export default CardExample;
