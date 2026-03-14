import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import MobileWrapper from "./MobileWrapper";

export default function Wallet() {
  const router = useRouter();

  const [contactless, setContactless] = useState(true);
  const [online, setOnline] = useState(true);
  const [atm, setAtm] = useState(true);

  return (
    <MobileWrapper>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={28} color="#0F2A44" />
          </TouchableOpacity>
          <Text style={styles.headerText}>My Wallet</Text>
        </View>

        {/* REAL CARD IMAGE */}
        <Image
          source={require("../assets/images/wallet.png")} // your wallet image
          style={styles.cardImage}
        />

        {/* BALANCE OVERLAY ON CARD 
        <View style={styles.cardOverlay}>
          <Text style={styles.cardBalanceLabel}>Balance</Text>
          <Text style={styles.cardBalance}>₹ 2,80,000</Text>
          <Text style={styles.cardHolder}>Bhamesh Kumar</Text>
          <Text style={styles.cardNumber}>**** **** **** 1234</Text>
        </View>*/}

        {/* CARD SETTINGS */}
        <Text style={styles.sectionTitle}>Card Settings</Text>

        <View style={styles.option}>
          <Text style={styles.optionText}>Contactless Payment</Text>
          <Switch
            trackColor={{ false: "#ccc", true: "#0F2A44" }}
            thumbColor="#fff"
            value={contactless}
            onValueChange={setContactless}
          />
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Online Payment</Text>
          <Switch
            trackColor={{ false: "#ccc", true: "#0F2A44" }}
            thumbColor="#fff"
            value={online}
            onValueChange={setOnline}
          />
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>ATM Withdraws</Text>
          <Switch
            trackColor={{ false: "#ccc", true: "#0F2A44" }}
            thumbColor="#fff"
            value={atm}
            onValueChange={setAtm}
          />
        </View>

        {/* BOTTOM NAVIGATION */}
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.replace("/HomeScreen")}>
            <Ionicons name="home" size={26} color="#0F2A44" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="wallet" size={26} color="#0F2A44" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/Card")}>
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
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 15,
    color: "#0F2A44",
  },

  // CARD IMAGE
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    resizeMode: "cover",
    marginBottom: 20,
  },
  cardOverlay: {
    position: "absolute",
    top: 90,
    left: 35,
  },
  cardBalanceLabel: {
    color: "#cfd8dc",
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "500",
  },
  cardBalance: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },
  cardHolder: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  cardNumber: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: "#0F2A44",
  },

  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    color: "#0F2A44",
    fontWeight: "500",
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