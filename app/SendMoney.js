import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import MobileWrapper from "./MobileWrapper";

export default function SendMoney() {
  const router = useRouter();
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: "Bhamesh Kumar", letter: "B" },
    { id: 2, name: "Hari Kumar", letter: "H" },
    { id: 3, name: "Bavani", letter: "B" },
    { id: 4, name: "Tamil Selvi", letter: "T" },
    
  ];

  const goToPayment = () => {
    if (!selectedUser) return;
    router.push({
      pathname: "/Paying",
      params: { name: selectedUser.name, letter: selectedUser.letter },
    });
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
          <Text style={styles.headerTitle}>Send Money</Text>
        </View>

        {/* BALANCE CARD */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>₹ 2,80,000</Text>
        </View>

        {/* QUICK CONTACTS */}
        <Text style={styles.sectionTitle}>Send To</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.quickContacts}
        >
          {users.map((user) => (
            <TouchableOpacity
              key={user.id}
              style={[
                styles.contactCard,
                selectedUser?.id === user.id && styles.selectedContact,
              ]}
              onPress={() => setSelectedUser(user)}
            >
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{user.letter}</Text>
              </View>
              <Text style={styles.contactName}>{user.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* RECENT TRANSACTIONS */}
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.transactionRow}>
              <View style={styles.transactionAvatar}>
                <Text style={styles.avatarText}>{item.letter}</Text>
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionName}>{item.name}</Text>
                <Text style={styles.transactionAmount}>
                  ₹ {Math.floor(Math.random() * 2000)}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.viewBtn}
                onPress={() =>
                  router.push({
                    pathname: "/PaymentDetails",
                    params: { name: item.name, amount: "100", reason: "Payment" },
                  })
                }
              >
                <Text style={styles.viewText}>View</Text>
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 120 }} // leave space for bottom nav & send button
        />

        {/* SEND BUTTON */}
        <TouchableOpacity
          style={[
            styles.sendBtn,
            !selectedUser && { backgroundColor: "#94a3b8" },
          ]}
          disabled={!selectedUser}
          onPress={goToPayment}
        >
          <Text style={styles.sendText}>Send Money</Text>
        </TouchableOpacity>

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
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },

  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  backBtn: { marginRight: 10 },
  headerTitle: { fontSize: 22, fontWeight: "700", color: "#0F2A44" },

  balanceCard: {
    backgroundColor: "#0F2A44",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  balanceLabel: { color: "#cfd8dc", fontSize: 14, marginBottom: 5 },
  balanceAmount: { color: "#fff", fontSize: 28, fontWeight: "700" },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#0F2A44",
  },

  quickContacts: { marginBottom: 20 },
  contactCard: {
    alignItems: "center",
    marginRight: 15,
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 3,
  },
  selectedContact: { borderWidth: 2, borderColor: "#0F2A44" },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  avatarText: { color: "#fff", fontSize: 20, fontWeight: "700" },
  contactName: { fontSize: 14, fontWeight: "500", maxWidth: 70, textAlign: "center" },

  transactionRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  transactionAvatar: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  transactionInfo: { flex: 1 },
  transactionName: { fontSize: 16, fontWeight: "500" },
  transactionAmount: { fontSize: 14, color: "#0F2A44", marginTop: 2 },
  viewBtn: { backgroundColor: "#EDE7E7", paddingHorizontal: 15, paddingVertical: 6, borderRadius: 6 },
  viewText: { color: "#0F2A44", fontWeight: "500" },

  sendBtn: {
    backgroundColor: "#0F2A44",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    position: "absolute",
    bottom: 70, // above bottom nav
    left: 20,
    right: 20,
  },
  sendText: { color: "#fff", fontSize: 16, fontWeight: "600" },

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