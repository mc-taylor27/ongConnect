import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity, Modal } from "react-native";

// Dados atualizados com as suas novas imagens
const ONGS_DATA = [
  { 
    id: "1", 
    nome: "Eco Vida", 
    causa: "Meio Ambiente", 
    imagem: "https://static.todamateria.com.br/upload/ma/os/maosplantandoarvorespelosobjetivosdedesenvolvimentosustentaveldomeioambiente-cke.jpg", 
    descricao: "Trabalhamos na recuperação de áreas degradadas e educação ambiental." 
  },
  { 
    id: "2", 
    nome: "Educa Mais", 
    causa: "Educação", 
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDyhZfbcFsHd92Z-ZNQ9S6GwumQfSFOzhfw&s", 
    descricao: "Oferecemos reforço escolar e atividades culturais para jovens." 
  },
  { 
    id: "3", 
    nome: "Saúde Global", 
    causa: "Saúde", 
    imagem: "https://img.freepik.com/fotos-gratis/angulo-alto-do-globo-com-estetoscopio-para-o-dia-da-paz_23-2148630391.jpg?semt=ais_hybrid&w=740&q=80", 
    descricao: "Assistência médica em comunidades carentes." 
  },
];

const ONGCard = ({ item, onPress }: { item: any, onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Image source={{ uri: item.imagem }} style={styles.logo} />
      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.causa}>{item.causa}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function Explorar() {
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [ongSelecionada, setOngSelecionada] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  const abrirDetalhes = (ong: any) => {
    setOngSelecionada(ong);
    setModalVisible(true);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2e7d32" />
        <Text style={{ marginTop: 10 }}>Buscando ONGs...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Explorar Causas</Text>
      <FlatList
        data={ONGS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ONGCard item={item} onPress={() => abrirDetalhes(item)} />}
        contentContainerStyle={styles.listContent}
      />

      {/* Modal que exibe a descrição detalhada ao clicar */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            {ongSelecionada && (
              <>
                <Image source={{ uri: ongSelecionada.imagem }} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{ongSelecionada.nome}</Text>
                <Text style={styles.modalCausa}>{ongSelecionada.causa}</Text>
                
                <View style={styles.divider} />
                
                <Text style={styles.modalDescricao}>{ongSelecionada.descricao}</Text>
              </>
            )}

            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  headerTitle: { fontSize: 24, fontWeight: "bold", padding: 20, paddingTop: 50, color: "#2e7d32" },
  listContent: { paddingHorizontal: 20, paddingBottom: 20 },
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,           
    elevation: 4,               
    shadowColor: "#000",        
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logo: { width: 60, height: 60, borderRadius: 30 },
  info: { marginLeft: 15, justifyContent: "center" },
  nome: { fontSize: 18, fontWeight: "bold", color: "#333" },
  causa: { fontSize: 14, color: "#666", marginTop: 2 },

  /* Estilos do Modal de Detalhes */
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", 
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 25,
    width: "85%",
    maxWidth: 400,
    alignItems: "center",
    elevation: 5,
  },
  modalImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  modalCausa: {
    fontSize: 16,
    color: "#2e7d32",
    marginBottom: 15,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#ddd",
    marginBottom: 15,
  },
  modalDescricao: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 24,
  },
  modalButton: {
    backgroundColor: "#2e7d32",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  }
});
