import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";

const Tab = createBottomTabNavigator();

function PlaceholderScreen({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name} (a criar...)</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" children={() => <PlaceholderScreen name="Search" />} />
        <Tab.Screen name="Notifications" children={() => <PlaceholderScreen name="Notifications" />} />
        <Tab.Screen name="Profile" children={() => <PlaceholderScreen name="Profile" />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, marginBottom: 20 },
});
