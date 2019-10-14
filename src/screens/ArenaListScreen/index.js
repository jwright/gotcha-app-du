import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import ArenasQuery from "../../queries/Arenas";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ArenaListScreen = ({ navigation }) => {
  const { longitude, latitude } = navigation.getParam("location");

  return (
    <View style={styles.container}>
      <Text>{latitude}/{longitude}</Text>
    </View>
  );
};

export default ArenaListScreen;
