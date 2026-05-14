import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, SafeAreaView } from "react-native";
import { useGlobalSearchParams } from "expo-router";

export default function Perfil() {
  const { userName } = useGlobalSearchParams();
  const [showDialog, setShowDialog] = useState(false);
  
  // 1. CRIAMOS UM ESTADO PARA GUARDAR O INTERESSE ESCOLHIDO
  const [interesse, setInteresse] = useState("Nenhuma causa selecionada");

  const selecionarCausa = (causa: string) => {
    // 2. AGORA SALVAMOS A ESCOLHA PARA ELA APARECER NA TELA
    setInteresse(causa); 
    setShowDialog(false); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder}>
          <Text style={{ fontSize: 50 }}>👤</Text>
        </View>
        
        <Text style={styles.userName}>{userName || "Voluntário"}</Text>
        
        {/* 3. EXIBIMOS O INTERESSE AQUI PARA DAR O FEEDBACK REAL */}
        <View style={styles.interesseBadge}>
           <Text style={styles.interesseLabel}>Interesse atual:</Text>
           <Text style={styles.interesseTexto}>{interesse}</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.editButton} 
        onPress={() => setShowDialog(true)}
      >
        <Text style={styles.buttonText}>Editar Interesses</Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={showDialog}>
        <View style={styles.modalOverlay}>
          <View style={styles.dialogBox}>
            <Text style={styles.dialogTitle}>Quais causas você prefere?</Text>
            
            <TouchableOpacity style={styles.optionBtn} onPress={() => selecionarCausa("Educação")}>
              <Text style={styles.optionText}>Educação</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn} onPress={() => selecionarCausa("Meio Ambiente")}>
              <Text style={styles.optionText}>Meio Ambiente</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn} onPress={() => selecionarCausa("Saúde")}>
              <Text style={styles.optionText}>Saúde</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowDialog(false)}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", alignItems: "center", padding: 20 },
  header: { alignItems: "center", marginTop: 60, marginBottom: 40 },
  avatarPlaceholder: { 
    width: 120, height: 120, borderRadius: 60, 
    backgroundColor: "#e8f5e9", justifyContent: "center", 
    alignItems: "center", marginBottom: 15, borderWidth: 1, borderColor: "#2e7d32"
  },
  userName: { fontSize: 28, fontWeight: "bold", color: "#333" },
  
  // ESTILOS PARA O FEEDBACK DE INTERESSE
  interesseBadge: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#f1f8e9",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#c8e6c9"
  },
  interesseLabel: { fontSize: 12, color: "#666", textTransform: "uppercase" },
  interesseTexto: { fontSize: 16, fontWeight: "bold", color: "#2e7d32" },

  editButton: { 
    backgroundColor: "#2e7d32", width: "100%", padding: 18, 
    borderRadius: 12, alignItems: "center", elevation: 5
  },
  buttonText: { color: "white", fontWeight: "bold", fontSize: 18 },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" },
  dialogBox: { width: "85%", backgroundColor: "white", borderRadius: 20, padding: 25, alignItems: "center" },
  dialogTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 25, color: "#2e7d32" },
  optionBtn: { backgroundColor: "#f1f8e9", width: "100%", padding: 15, borderRadius: 10, marginBottom: 12, alignItems: "center" },
  optionText: { fontSize: 16, fontWeight: "600", color: "#2e7d32" },
  cancelText: { color: "#999", fontWeight: "bold", marginTop: 10, textDecorationLine: "underline" }
});