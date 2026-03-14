import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import MobileWrapper from "./MobileWrapper";

export default function Paying() {
  const router = useRouter();
  const { name } = useLocalSearchParams();

  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");

  /* PRESS NUMBER */
  const pressKey = (num) => {
    setAmount((prev) => prev + num);
  };

  /* DELETE NUMBER */
  const deleteKey = () => {
    setAmount((prev) => prev.slice(0, -1));
  };

  const goBack = () => router.back();

  return (
    <MobileWrapper>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={28} color="#0F2A44" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Pay Money</Text>
        </View>

        {/* USER INFO */}
        <View style={styles.userBox}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {name ? name.charAt(0).toUpperCase() : "B"}
            </Text>
          </View>
          <Text style={styles.username}>{name || "Bhamesh Kumar"}</Text>
        </View>

        {/* AMOUNT */}
        <View style={styles.amountBox}>
          <Text style={styles.amount}>₹ {amount || "0"}</Text>
        </View>

        {/* REASON */}
        <TextInput
          placeholder="Enter Reason"
          value={reason}
          onChangeText={setReason}
          style={styles.reason}
        />

        {/* NEXT BUTTON */}
        <View style={styles.arrowRow}>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() =>
              router.push({
                pathname: "/Success",
                params: { name, amount, reason },
              })
            }
          >
            <Ionicons name="arrow-forward" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* KEYPAD */}
        <View style={styles.keypad}>
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.key}
              onPress={() => pressKey(num)}
            >
              <Text style={styles.keyText}>{num}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.key}>
            <Text style={styles.keyText}>#</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key} onPress={() => pressKey("0")}>
            <Text style={styles.keyText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key} onPress={deleteKey}>
            <Ionicons name="backspace" size={22} />
          </TouchableOpacity>
        </View>

        {/* BOTTOM NAVIGATION */}
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.push("/Home")}>
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
  container: { flex: 1, backgroundColor: "#F5F5F5", padding: 20 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  backBtn: { marginRight: 10 },
  headerTitle: { fontSize: 22, fontWeight: "700", color: "#0F2A44" },

  userBox: { alignItems: "center", marginTop: 20 },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: { color: "#fff", fontSize: 28, fontWeight: "bold" },
  username: { marginTop: 10, fontSize: 16, fontWeight: "500" },

  amountBox: {
    backgroundColor: "#E6E1E1",
    padding: 25,
    marginTop: 30,
    alignItems: "center",
    borderRadius: 6,
  },
  amount: { fontSize: 28, fontWeight: "bold", color: "#0F2A44" },

  reason: {
    backgroundColor: "#E6E1E1",
    marginTop: 20,
    padding: 12,
    borderRadius: 6,
  },

  arrowRow: { alignItems: "flex-end", marginTop: 10 },
  nextBtn: {
    backgroundColor: "#0F2A44",
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  keypad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom:30,
  },
  key: {
    width: "30%",
    backgroundColor: "#E6E1E1",
    padding: 18,
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 15,
  },
  keyText: { fontSize: 20, fontWeight: "600" },

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