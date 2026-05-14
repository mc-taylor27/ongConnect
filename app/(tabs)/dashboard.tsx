import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
// Mudança crucial aqui: useGlobalSearchParams para não perder os dados
import { useGlobalSearchParams, useRouter } from "expo-router";

export default function Dashboard() {
  const { userName, voluntarioId } = useGlobalSearchParams();
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/"); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>
          Olá, {userName || "Voluntário"}, que bom ter você aqui para ajudar!
        </Text>
        
        <Text style={styles.idText}>
          ID de Voluntário: {voluntarioId}
        </Text>
        
        <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#2e7d32" },
  content: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  welcomeText: { color: "white", fontSize: 22, textAlign: "center", fontWeight: "bold" },
  idText: { color: "#a5d6a7", fontSize: 16, marginTop: 15, fontStyle: 'italic' },
  logoutBtn: { marginTop: 40 },
  logoutText: { color: "white", textDecorationLine: "underline", fontSize: 16 }
});