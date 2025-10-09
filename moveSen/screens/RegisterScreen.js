import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api/api"; 

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Erro", "Preenche todos os campos");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/auth/register", { name, email, password });
      console.log("Registo OK:", response.data);

      const { token, user } = response.data;
      await AsyncStorage.setItem("token", token);

      Alert.alert("Sucesso", "Conta criada com sucesso!");
      navigation.navigate("Login");

    } catch (error) {
      console.error("Erro no registo:", error.response?.data || error.message);
      Alert.alert("Erro", "Não foi possível criar a conta. Tenta novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registar</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
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

      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <Button title="Criar Conta" onPress={handleRegister} />
      )}

      <View style={{ marginTop: 20 }}>
        <Button title="Voltar ao Login" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, fontWeight: "bold" },
  input: {
    width: "100%",
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
