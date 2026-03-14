import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import MobileWrapper from "./MobileWrapper";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("currentUser");
        if (storedUser) setUser(JSON.parse(storedUser));
      } catch (error) {
        console.log("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("currentUser");
    router.replace("/Signin");
  };

  if (loading) {
    return (
      <MobileWrapper>
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#0F2A44" />
        </View>
      </MobileWrapper>
    );
  }

  if (!user) {
    return (
      <MobileWrapper>
        <View style={styles.center}>
          <Text style={styles.message}>Please sign in to view your profile.</Text>
          <TouchableOpacity onPress={() => router.replace("/Signin")}>
            <Text style={styles.signInText}>Go to Sign In</Text>
          </TouchableOpacity>
        </View>
      </MobileWrapper>
    );
  }

  // First letter for avatar
  const avatarLetter = user.name ? user.name[0].toUpperCase() : "?";

  return (
    <MobileWrapper>
      <View style={styles.container}>
        {/* Avatar */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{avatarLetter}</Text>
        </View>

        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.replace("/HomeScreen")}>
            <Ionicons name="home" size={26} color="#0F2A44" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/Wallet")}>
            <Ionicons name="wallet" size={26} color="#0F2A44" />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialIcons name="credit-card" size={26} color="#0F2A44" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/Profile")}>
            <Ionicons name="person-circle" size={26} color="#0F2A44" />
          </TouchableOpacity>
        </View>
      </View>
    </MobileWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#fff",
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  avatarText: { color: "#fff", fontSize: 36, fontWeight: "bold" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 5 },
  email: { fontSize: 16, color: "#555", marginBottom: 20 },
  logoutButton: {
    marginTop: 20,
    backgroundColor: "#0F2A44",
    padding: 12,
    borderRadius: 6,
    width: "60%",
    alignItems: "center",
  },
  logoutText: { color: "#FFF", fontSize: 16 },
  message: { fontSize: 16, color: "#555", textAlign: "center", marginBottom: 10 },
  signInText: {
    marginTop: 10,
    color: "#0F2A44",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
});