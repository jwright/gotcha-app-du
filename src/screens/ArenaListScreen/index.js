import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from "@apollo/react-hooks";

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
  const { loading, error, data } = useQuery(ArenasQuery, {
    variables: {
      latitude, longitude, radius: 25,
    }
  });

  if (loading) { console.log("LOADING!"); }
  if (error) { console.log("ERROR!", error); }
  if (data) { console.log("DATA", data); }

  return (
    <View style={styles.container}>
      <Text>{latitude}/{longitude}</Text>
    </View>
  );
};

export default ArenaListScreen;
