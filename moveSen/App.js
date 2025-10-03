import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import AppTabs from "./navigation/AppTabs";
import AuthStack from "./navigation/AuthStack";

export default function App() {
  const [user, setUser] = React.useState(false);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {user ? <AppTabs /> : <AuthStack setUser={setUser} />}
    </NavigationContainer>
  );
}
