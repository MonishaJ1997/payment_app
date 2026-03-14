import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import MobileWrapper from "./MobileWrapper";

export default function Success() {
  const router = useRouter();
  const { name, amount, reason } = useLocalSearchParams();

  return (
    <MobileWrapper>
      <View style={styles.container}>
        <Ionicons name="checkmark-circle" size={120} color="#0F2A44" />

        <Text style={styles.title}>Transferred Successfully</Text>
        <Text style={styles.sub}>₹{amount} sent to {name}</Text>

        {/* DETAILS BUTTON */}
        <TouchableOpacity
          style={styles.detailsBtn}
          onPress={() =>
            router.push({
              pathname: "/PaymentDetails",
              params: { name, amount, reason },
            })
          }
        >
          <Text style={styles.detailsText}>View Details</Text>
        </TouchableOpacity>

        {/* CONTINUE BUTTON */}
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => router.replace("/HomeScreen")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        {/* BOTTOM NAVIGATION */}
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.replace("/HomeScreen")}>
            <Ionicons name="home" size={26} color="#0F2A44" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/Wallet")}>
            <Ionicons name="wallet" size={26} color="#0F2A44" />
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
    padding: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 20,
  },

  sub: {
    marginTop: 10,
    color: "#444",
  },

  detailsBtn: {
    backgroundColor: "#0F2A44",
    width: "90%",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 30,
  },

  detailsText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  continueBtn: {
    borderWidth: 1,
    borderColor: "#0F2A44",
    width: "90%",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },

  continueText: {
    color: "#0F2A44",
    fontWeight: "bold",
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