import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import MobileWrapper from "./MobileWrapper";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const loggedInEmail = await AsyncStorage.getItem("loggedInUser");
        if (!loggedInEmail) {
          router.replace("/Signin");
          return;
        }

        const storedUsers = await AsyncStorage.getItem("users");
        const users = storedUsers ? JSON.parse(storedUsers) : [];
        const currentUser = users.find((u) => u.email === loggedInEmail);

        if (!currentUser) {
          router.replace("/Signin");
          return;
        }

        setUser(currentUser);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("loggedInUser");
    router.replace("/Signin");
  };

  if (!user) return null;

  return (
    <MobileWrapper>
      <View style={styles.container}>
        <Text style={styles.heading}>My Profile</Text>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.name.charAt(0).toUpperCase()}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Full Name</Text>
          <Text style={styles.value}>{user.name}</Text>

          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user.email}</Text>

          <Text style={styles.label}>Mobile Number</Text>
          <Text style={styles.value}>{user.phone}</Text>
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.push("/HomeScreen")}>
            <Ionicons name="home" size={26} color="#0F2A44" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Wallet")}>
            <Ionicons name="wallet" size={26} color="#0F2A44" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="credit-card" size={26} color="#0F2A44" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Profile")}>
            <Ionicons name="person-circle" size={26} color="#0F2A44" />
          </TouchableOpacity>
        </View>
      </View>
    </MobileWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: "#F5F5F5", paddingBottom: 100, alignItems: "center" },
  heading: { fontSize: 24, fontWeight: "700", color: "#0F2A44", marginBottom: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: "#4A90E2", justifyContent: "center", alignItems: "center", marginBottom: 20 },
  avatarText: { color: "#fff", fontSize: 40, fontWeight: "bold" },
  infoCard: { width: "100%", backgroundColor: "#fff", padding: 20, borderRadius: 16, elevation: 5, marginBottom: 30 },
  label: { fontSize: 14, color: "#888", marginTop: 10 },
  value: { fontSize: 18, fontWeight: "600", color: "#0F2A44", marginBottom: 5 },
  logoutBtn: { backgroundColor: "#0F2A44", padding: 15, borderRadius: 10, alignItems: "center", width: "100%", marginBottom: 20 },
  logoutText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  bottomNav: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "#fff", flexDirection: "row", justifyContent: "space-around", paddingVertical: 15, borderTopWidth: 1, borderColor: "#eee" },
});