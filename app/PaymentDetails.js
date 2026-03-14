import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import MobileWrapper from "./MobileWrapper";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function PaymentDetails() {
  const { name, amount, reason } = useLocalSearchParams();
  const router = useRouter();

  return (
    <MobileWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Payment Details</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Receiver</Text>
          <Text style={styles.value}>{name}</Text>

          <Text style={styles.label}>Amount</Text>
          <Text style={styles.value}>₹{amount}</Text>

          <Text style={styles.label}>Reason</Text>
          <Text style={styles.value}>{reason || "Not Provided"}</Text>

          <Text style={styles.label}>Status</Text>
          <Text style={styles.success}>Successful</Text>
        </View>

        {/* BOTTOM NAVIGATION */}
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.replace("/HomeScreen")}>
            <Ionicons name="home" size={26} color="#0F2A44" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/Wallet")}>
            <Ionicons name="wallet" size={26} color="#0F2A44" />
          </TouchableOpacity>

          <TouchableOpacity >
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
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    paddingBottom: 80, // leave space for bottom nav
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    elevation: 3,
  },

  label: {
    color: "#888",
    marginTop: 10,
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
  },

  success: {
    color: "green",
    fontWeight: "bold",
    marginTop: 5,
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