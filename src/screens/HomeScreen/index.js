import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class HomeScreen extends React.Component {
  static getLocation = async () => {
    const { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync();

    return { latitude, longitude };
  };

  handleGrantPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      console.log("You need to grant us permissions to we can find arenas");
    }

    this.navigate();
  };

  navigate = async () => {
    const { navigation } = this.props;

    const location = await HomeScreen.getLocation();

    navigation.navigate("ArenaList", { location: location });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Gotcha!</Text>
        <Text>We will get you playing in a moment.</Text>
        <Text>In order to get the arenas, we need to ask for your location so we can find one nearby.</Text>
        <Button onPress={this.handleGrantPermissions} title="Find Nearby Arenas" />
      </View>
    );
  }
}

export default HomeScreen;
