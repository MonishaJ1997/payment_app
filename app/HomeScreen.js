import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import MobileWrapper from "./MobileWrapper";
import Sidebar from "./Sidebar"; // Import your sidebar component

export default function Home() {
  const router = useRouter();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const openSidebar = () => setSidebarVisible(true);
  const closeSidebar = () => setSidebarVisible(false);

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

           {/*<TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addText}>+ADD</Text>
            </TouchableOpacity>*/}
          </View>
        </View>

        {/* BODY */}
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>Top Service</Text>

          <View style={styles.grid}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => router.push("/SendMoney")}
            >
              <Ionicons name="cash-outline" size={32} color="#0F2A44" />
              <Text style={styles.itemText}>Send Money</Text>
            </TouchableOpacity>

            <View style={styles.item}>
              <Ionicons name="stats-chart" size={32} color="#0F2A44" />
              <Text style={styles.itemText}>Buy Airtime</Text>
            </View>

            <View style={styles.item}>
              <Ionicons name="wifi" size={32} color="#0F2A44" />
              <Text style={styles.itemText}>Buy Data</Text>
            </View>

            <View style={styles.item}>
              <Ionicons name="receipt-outline" size={32} color="#0F2A44" />
              <Text style={styles.itemText}>Pay Bill</Text>
            </View>

            <View style={styles.item}>
              <FontAwesome name="dollar" size={28} color="#0F2A44" />
              <Text style={styles.itemText}>Foreign Coin</Text>
            </View>

            <View style={styles.item}>
              <Ionicons name="apps" size={32} color="#0F2A44" />
              <Text style={styles.itemText}>More</Text>
            </View>
          </View>

          {/* RECENT TRANSACTION TITLE */}
          <View style={styles.recentRow}>
            <Text style={styles.sectionTitle}>Recent Transaction</Text>
            <Text style={styles.seeAll}>See all &gt;</Text>
          </View>

          {/* RECENT TRANSACTION CARDS */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.transactionList}
          >
            {/* Card 1 */}
            <View style={styles.card}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>B</Text>
              </View>

              <Text style={styles.name}>Bavani</Text>

              <TouchableOpacity
                style={styles.detailsBtn}
                onPress={() =>
                  router.push({
                    pathname: "/PaymentDetails",
                    params: { name: "Bavani", amount: "500", reason: "Dinner Payment" },
                  })
                }
              >
                <Text style={styles.detailsText}>View</Text>
              </TouchableOpacity>
            </View>

            {/* Card 2 */}
            <View style={styles.card}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>B</Text>
              </View>

              <Text style={styles.name}>Bhamesh</Text>

              <TouchableOpacity
                style={styles.detailsBtn}
                onPress={() =>
                  router.push({
                    pathname: "/PaymentDetails",
                    params: { name: "Bhamesh", amount: "1200", reason: "Shopping" },
                  })
                }
              >
                <Text style={styles.detailsText}>View</Text>
              </TouchableOpacity>
            </View>

            {/* Card 3 */}
            <View style={styles.card}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>A</Text>
              </View>

              <Text style={styles.name}>Anitha</Text>

              <TouchableOpacity
                style={styles.detailsBtn}
                onPress={() =>
                  router.push({
                    pathname: "/PaymentDetails",
                    params: { name: "Anitha", amount: "300", reason: "Recharge" },
                  })
                }
              >
                <Text style={styles.detailsText}>View</Text>
              </TouchableOpacity>
            </View>
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

          <TouchableOpacity >
            <MaterialIcons name="credit-card" size={26} color="#0F2A44" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/Profile")}>
            <Ionicons name="person-circle" size={26} color="#0F2A44" />
          </TouchableOpacity>
        </View>

        {/* SIDEBAR */}
        {sidebarVisible && <Sidebar closeSidebar={closeSidebar} />}
      </View>
    </MobileWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    backgroundColor: "#0F2A44",
    padding: 20,
    borderRadius: 20,
    marginTop: 0,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  balanceTitle: { color: "#cfd8dc", fontSize: 13 },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  balance: { fontSize: 28, color: "#fff", fontWeight: "bold" },
  addBtn: {
    backgroundColor: "#3B82F6",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 4,
  },
  addText: { color: "#fff" },
  body: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 15 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  item: {
    width: "30%",
    backgroundColor: "#f2f2f2",
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    elevation: 3,
  },
  itemText: { marginTop: 8, fontSize: 12, textAlign: "center" },
  recentRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 },
  seeAll: { color: "#3B82F6" },
  transactionList: { marginTop: 10, marginBottom: 50 },
  card: {
    width: 140,
    height: 150,
    backgroundColor: "#d7d1d1",
    borderRadius: 10,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: { width: 55, height: 55, backgroundColor: "#3b82f6", borderRadius: 10, alignItems: "center", justifyContent: "center", marginBottom: 10 },
  avatarText: { color: "#fff", fontSize: 26, fontWeight: "bold" },
  name: { fontSize: 16, fontWeight: "600", marginBottom: 10 },
  detailsBtn: { backgroundColor: "#eee", paddingHorizontal: 20, paddingVertical: 6, borderRadius: 3 },
  detailsText: { color: "#0F2A44" },
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