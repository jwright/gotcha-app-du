import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ArenaListScreen = (props) => {
  const { navigation } = props;

  const location = navigation.getParam("location");
  const latitude = location.latitude;
  const longitude = location.longitude;

  return (
    <View style={styles.container}>
      <Text>{latitude}/{longitude}</Text>
    </View>
  );
};

export default ArenaListScreen;
