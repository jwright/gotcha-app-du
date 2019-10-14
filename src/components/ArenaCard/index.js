import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

const ArenaCard = ({ arena: { id, locationName, streetAddress1, city, state, zipCode } }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={() => alert(id)}>
      <Text>{locationName}</Text>
      <Text>{streetAddress1}</Text>
      <Text>{city}, {state} {zipCode}</Text>
    </TouchableOpacity>
  </View>
);

export default ArenaCard;
