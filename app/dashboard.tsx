import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!global.isLoggedIn) {
      router.replace("/login");
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>

        <TouchableOpacity
          onPress={() => {
            global.isLoggedIn = false;
            global.userEmail = "";
            router.replace("/login");
          }}
        >
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Welcome 👋</Text>
        <Text style={styles.email}>{global.userEmail}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/profile")}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
  },

  header: {
    width: "100%",
    maxWidth: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  logout: {
    color: "#ef4444",
    fontWeight: "bold",
  },

  card: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#0f172a",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },

  label: {
    color: "#94a3b8",
  },

  email: {
    color: "#38bdf8",
    fontSize: 16,
    marginTop: 5,
  },

  button: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#22c55e",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
