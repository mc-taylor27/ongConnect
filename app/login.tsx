import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleVerify = () => {
    const nomeLimpo = name.trim();

    if (nomeLimpo === "") {
      Alert.alert("Erro", "Por favor, digite seu nome.");
      return;
    }

    if (nomeLimpo.toLowerCase() === "juju") {
      const generatedId = Math.random().toString(36).substring(2, 9).toUpperCase();
      
      // Essa é a forma 100% segura de navegar para abas enviando dados
      router.replace(`/(tabs)/dashboard?userName=juju&voluntarioId=${generatedId}`);
    } else {
      Alert.alert("Acesso Negado", "Nome incorreto.");
      setName(""); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Identificação</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#a5d6a7"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.back()} style={{marginTop: 20}}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#2e7d32" },
  content: { flex: 1, justifyContent: "center", alignItems: "center", padding: 25 },
  label: { color: "white", fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { backgroundColor: "rgba(255,255,255,0.2)", width: "100%", borderRadius: 8, padding: 15, color: "white", fontSize: 18, textAlign: "center", borderWidth: 1, borderColor: "white" },
  button: { backgroundColor: "white", marginTop: 25, paddingVertical: 15, paddingHorizontal: 60, borderRadius: 8 },
  buttonText: { color: "#2e7d32", fontWeight: "bold", fontSize: 16 },
  backText: { color: "white", textDecorationLine: "underline" }
});