
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import MobileWrapper from "./MobileWrapper";

export default function Home() {

const router = useRouter();

return (
<MobileWrapper>
<View style={styles.container}>

{/* HEADER */}
<View style={styles.header}>

<View style={styles.headerTop}>
<Ionicons name="menu" size={26} color="#fff" />
<Ionicons name="qr-code-outline" size={26} color="#fff" />
</View>

<Text style={styles.balanceTitle}>Account Total Balance</Text>

<View style={styles.balanceRow}>
<Text style={styles.balance}>₹8,45,000</Text>

<TouchableOpacity style={styles.addBtn}>
<Text style={styles.addText}>+ADD</Text>
</TouchableOpacity>
</View>

<Text style={styles.verifyText}>
Enter 6-digits verification code to your mobile number..
</Text>

</View>

{/* BODY */}
<View style={styles.body}>

<Text style={styles.sectionTitle}>Top Service</Text>

<View style={styles.grid}>
<TouchableOpacity 
style={styles.item}
onPress={() => router.push("/SendMoney")}
>
<Ionicons name="cash-outline" size={32} color="#0F2A44"/>
<Text style={styles.itemText}>Send Money</Text>
</TouchableOpacity>

<View style={styles.item}>
<Ionicons name="stats-chart" size={32} color="#0F2A44"/>
<Text style={styles.itemText}>Buy Airtime</Text>
</View>

<View style={styles.item}>
<Ionicons name="wifi" size={32} color="#0F2A44"/>
<Text style={styles.itemText}>Buy Data</Text>
</View>

<View style={styles.item}>
<Ionicons name="receipt-outline" size={32} color="#0F2A44"/>
<Text style={styles.itemText}>Pay Bill</Text>
</View>

<View style={styles.item}>
<FontAwesome name="dollar" size={28} color="#0F2A44"/>
<Text style={styles.itemText}>Foreign Coin</Text>
</View>

<View style={styles.item}>
<Ionicons name="apps" size={32} color="#0F2A44"/>
<Text style={styles.itemText}>More</Text>
</View>

</View>

<View style={styles.recentRow}>
<Text style={styles.sectionTitle}>Recent Transactions</Text>
<Text style={styles.seeAll}>See all &gt;</Text>
</View>

</View>

{/* BOTTOM NAV */}
<View style={styles.bottomNav}>

<TouchableOpacity onPress={() => router.push("/Home")}>
<Ionicons name="home" size={26} color="#0F2A44" />
</TouchableOpacity>

<TouchableOpacity onPress={() => router.push("/Wallet")}>
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

container:{
flex:1,
backgroundColor:"#F2F2F2"
},

header:{
backgroundColor:"#0F2A44",
padding:20,
paddingTop:50,
borderBottomLeftRadius:20,
borderBottomRightRadius:20,
borderTopRightRadius:20,
borderTopLeftRadius:20,
marginTop:80,
},

headerTop:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:20
},

balanceTitle:{
color:"#cfd8dc",
fontSize:13
},

balanceRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop:6
},

balance:{
fontSize:28,
color:"#fff",
fontWeight:"bold"
},

addBtn:{
backgroundColor:"#3B82F6",
paddingHorizontal:15,
paddingVertical:6,
borderRadius:4
},

addText:{
color:"#fff"
},

verifyText:{
color:"#cfd8dc",
marginTop:10
},

body:{
padding:20
},

sectionTitle:{
fontSize:18,
fontWeight:"600",
marginBottom:15
},

grid:{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between"
},

item:{
width:"30%",
backgroundColor:"#fff",
padding:18,
borderRadius:10,
alignItems:"center",
marginBottom:20,
elevation:3
},

itemText:{
marginTop:8,
fontSize:12,
textAlign:"center"
},

recentRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop:10
},

seeAll:{
color:"#3B82F6"
},

bottomNav:{
position:"absolute",
bottom:30,
left:0,
right:0,
backgroundColor:"#fff",
flexDirection:"row",
justifyContent:"space-around",
paddingVertical:15,
borderTopWidth:1,
borderColor:"#eee"
}

});

