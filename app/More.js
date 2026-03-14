import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import MobileWrapper from "./MobileWrapper";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function MoreServices() {
  const router = useRouter();

  // List of additional services
  const services = [
    { name: "Recharge", icon: <Ionicons name="phone-portrait" size={28} color="#0F2A44" />  },
    { name: "Loan", icon: <FontAwesome name="money" size={28} color="#0F2A44" /> },
    { name: "Invest", icon: <MaterialIcons name="trending-up" size={28} color="#0F2A44" /> },
    { name: "Insurance", icon: <Ionicons name="shield-checkmark" size={28} color="#0F2A44" /> },
    { name: "Gift Cards", icon: <FontAwesome name="gift" size={28} color="#0F2A44" /> },
    { name: "Charity", icon: <Ionicons name="heart" size={28} color="#0F2A44" />},
  ];

  return (
    <MobileWrapper>
      <View style={styles.container}>
        {/* Top Back */}
        <TouchableOpacity style={styles.topBack} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#0F2A44" />
          <Text style={styles.topBackText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>More Services</Text>

        <ScrollView contentContainerStyle={styles.grid}>
          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => router.push(service.route)}
            >
              {service.icon}
              <Text style={styles.itemText}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>


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
          
    </MobileWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  topBack: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  topBackText: { fontSize: 16, color: "#0F2A44", marginLeft: 5 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
   bottomNav: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "#fff", flexDirection: "row", justifyContent: "space-around", paddingVertical: 15, borderTopWidth: 1, borderColor: "#eee" },
  item: {
    width: "45%",
    backgroundColor: "#f2f2f2",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
    elevation: 2,
  },
  itemText: { marginTop: 10, fontSize: 14, fontWeight: "500", textAlign: "center", color: "#0F2A44" },
});