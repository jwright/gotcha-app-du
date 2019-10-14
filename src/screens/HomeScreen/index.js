import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Welcome to Gotcha!</Text>
    <Text>We will get you playing in a moment.</Text>
    <Text>In order to get the arenas, we need to ask for your location so we can find one nearby.</Text>
    <Button onPress={() => console.log("YOU PRESSED THE BUTTON!!!")} title="Find Nearby Arenas" />
  </View>
);

export default HomeScreen;
