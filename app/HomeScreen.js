// Home.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import MobileWrapper from "./MobileWrapper";
import Sidebar from "./Sidebar";

export default function Home() {
  const router = useRouter();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const openSidebar = () => setSidebarVisible(true);
  const closeSidebar = () => setSidebarVisible(false);

  // Top Services list with routes
  const topServices = [
    { name: "Send Money", icon: <Ionicons name="cash-outline" size={32} color="#0F2A44" />, route: "/SendMoney" },
    { name: "Buy Airtime", icon: <Ionicons name="stats-chart" size={32} color="#0F2A44" />, route: "/BuyAirtime" },
    { name: "Buy Data", icon: <Ionicons name="wifi" size={32} color="#0F2A44" />, route: "/BuyData" },
    { name: "Pay Bill", icon: <Ionicons name="receipt-outline" size={32} color="#0F2A44" />, route: "/PayBill" },
    { name: "Foreign Coin", icon: <FontAwesome name="dollar" size={28} color="#0F2A44" />, route: "/ForeignCoin" },
    { name: "More", icon: <Ionicons name="apps" size={32} color="#0F2A44" />, route: "/More" },
  ];

  // Example recent transactions
  const recentTransactions = [
    { name: "Bavani", amount: "500", reason: "Dinner Payment" },
    { name: "Bhamesh", amount: "1200", reason: "Shopping" },
    { name: "Anitha", amount: "300", reason: "Recharge" },
  ];

  return (
    <MobileWrapper>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={openSidebar}>
              <Ionicons name="menu" size={26} color="#fff" />
            </TouchableOpacity>
            <Ionicons name="qr-code-outline" size={26} color="#fff" />
          </View>

          <Text style={styles.balanceTitle}>Account Total Balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balance}>₹2,80,000</Text>
          </View>
        </View>

        {/* BODY */}
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>Top Service</Text>
          <View style={styles.grid}>
            {topServices.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => router.push(service.route)}
              >
                {service.icon}
                <Text style={styles.itemText}>{service.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* RECENT TRANSACTIONS */}
          <View style={styles.recentRow}>
            <Text style={styles.sectionTitle}>Recent Transaction</Text>
            <Text style={styles.seeAll}>See all &gt;</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.transactionList}>
            {recentTransactions.map((tx, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{tx.name[0]}</Text>
                </View>
                <Text style={styles.name}>{tx.name}</Text>
                <TouchableOpacity
                  style={styles.detailsBtn}
                  onPress={() => router.push({ pathname: "/PaymentDetails", params: tx })}
                >
                  <Text style={styles.detailsText}>View</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* BOTTOM NAV */}
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.push("/HomeScreen")}>
            <Ionicons name="home" size={26} color="#0F2A44" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Wallet")}>
            <Ionicons name="wallet" size={26} color="#0F2A44" />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => router.push("/Profile")}>
            <Ionicons name="person-circle" size={26} color="#0F2A44" />
          </TouchableOpacity>
        </View>

        {sidebarVisible && <Sidebar closeSidebar={closeSidebar} />}
      </View>
    </MobileWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { backgroundColor: "#0F2A44", padding: 20, borderRadius: 20 },
  headerTop: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  balanceTitle: { color: "#cfd8dc", fontSize: 13 },
  balanceRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 6 },
  balance: { fontSize: 28, color: "#fff", fontWeight: "bold" },
  body: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 15 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  item: { width: "30%", backgroundColor: "#f2f2f2", padding: 18, borderRadius: 10, alignItems: "center", marginBottom: 20, elevation: 3 },
  itemText: { marginTop: 8, fontSize: 12, textAlign: "center" },
  recentRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 },
  seeAll: { color: "#3B82F6" },
  transactionList: { marginTop: 10, marginBottom: 50 },
  card: { width: 140, height: 150, backgroundColor: "#d7d1d1", borderRadius: 10, marginRight: 20, alignItems: "center", justifyContent: "center" },
  avatar: { width: 55, height: 55, backgroundColor: "#3b82f6", borderRadius: 10, alignItems: "center", justifyContent: "center", marginBottom: 10 },
  avatarText: { color: "#fff", fontSize: 26, fontWeight: "bold" },
  name: { fontSize: 16, fontWeight: "600", marginBottom: 10 },
  detailsBtn: { backgroundColor: "#eee", paddingHorizontal: 20, paddingVertical: 6, borderRadius: 3 },
  detailsText: { color: "#0F2A44" },
  bottomNav: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "#fff", flexDirection: "row", justifyContent: "space-around", paddingVertical: 15, borderTopWidth: 1, borderColor: "#eee" },
});