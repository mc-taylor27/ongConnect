import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>


      <View style={styles.top}>
       <Image
        source={require("../assets/images/ong.png")}
        style={styles.logo}
      />
      </View>


      <View style={styles.center}>
        <Text style={styles.title}>ONG Connect</Text>
        <Text style={styles.subtitle}>
          Conectando pessoas que querem ajudar com quem precisa
        </Text>
      </View>

      <View style={styles.bottom}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Conhecer Projetos pressionado")}
        >
          <Text style={styles.buttonText}>Conhecer Projetos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log("Login pressionado")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#2e7d32",
    padding: 30
  },

  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  bottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },

  logo: {
    width: 120,
    height: 120,
    marginTop: 40,
    borderRadius: 500
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white"
  },

  subtitle: {
    fontSize: 16,
    color: "#e8f5e9",
    textAlign: "center",
    marginTop: 10
  },

  button: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 90
  },

  buttonText: {
    color: "#2e7d32",
    fontWeight: "bold",
    fontSize: 16
  },

  loginText: {
    color: "white",
    textDecorationLine: "underline",
    fontSize: 16,
    marginTop: 10
  }

});