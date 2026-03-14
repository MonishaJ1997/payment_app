import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Sidebar({ closeSidebar }) {
  const router = useRouter();

  return (
    <View style={styles.overlay}>
      <View style={styles.sidebar}>
       

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            router.push("/Home");
            closeSidebar();
          }}
        >
          <Ionicons name="home-outline" size={24} color="#1F2937" />
          <Text style={styles.menuText}>HomeScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            router.push("/Wallet");
            closeSidebar();
          }}
        >
          <Ionicons name="wallet-outline" size={24} color="#1F2937" />
          <Text style={styles.menuText}>Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            router.push("/Card");
            closeSidebar();
          }}
        >
          <MaterialIcons name="credit-card" size={24} color="#1F2937" />
          <Text style={styles.menuText}>Cards</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            router.push("/Profile");
            closeSidebar();
          }}
        >
          <Ionicons name="person-outline" size={24} color="#1F2937" />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={closeSidebar}>
          <Ionicons name="close-outline" size={24} color="#EF4444" />
          <Text style={[styles.menuText, { color: "#EF4444" }]}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(31, 41, 55, 0.5)", // dark semi-transparent overlay
    zIndex: 100,
  },

  sidebar: {
    width: 270,
    height: "100%",
    backgroundColor: "#F9FAFB", // light gray background
    paddingTop: 80,
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#0F172A", // dark navy
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    paddingVertical: 8,
    borderRadius: 8,
  },

  menuText: {
    fontSize: 16,
    marginLeft: 20,
    color: "#1F2937", // dark gray text
    fontWeight: "700",
  },
});