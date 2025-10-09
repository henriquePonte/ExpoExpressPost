import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import api from "../api/api"; 
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen({ navigation, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

const handleLogin = async () => {
  if (!email.trim() || !password.trim()) {
    Alert.alert("Erro", "Preenche o email e a password");
    return;
  }

  setLoading(true);
  try {
    const response = await api.post("/auth/login", { email, password });
    console.log("Login OK:", response.data);

    const { token, user } = response.data;
    await AsyncStorage.setItem("token", token);
    setUser(user);


  } catch (error) {
    console.error("Error in login:", error.response?.data || error.message);
    Alert.alert("Error", "Email or password invalid");
  } finally {
    setLoading(false);
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔑 Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title={loading ? "Loading..." : "Login"} onPress={handleLogin} />

      <View style={{ height: 20 }} />

      <Button
        title="Criar Conta"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
