import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import MobileWrapper from "./MobileWrapper";

export default function Transfer(){

const router = useRouter();

return(
<MobileWrapper>
<View style={styles.container}>

<View style={styles.header}>
<TouchableOpacity onPress={()=>router.back()}>
<Ionicons name="chevron-back" size={24}/>
</TouchableOpacity>
<Text style={styles.headerText}>Transfer</Text>
</View>

<Text style={styles.section}>Where to Send</Text>

<View style={styles.balanceRow}>
<Text style={styles.balance}>₹ 2,80,000</Text>
<Text style={styles.seeAll}>See all </Text>
</View>

{/* Wallet to Wallet */}
<TouchableOpacity style={styles.card}>
<FontAwesome5 name="wallet" size={28} color="#0F2A44"/>
<View style={styles.cardText}>
<Text style={styles.small}>Transfer to wallet</Text>
<Text style={styles.title}>Wallet to other</Text>
</View>
</TouchableOpacity>

{/* Wallet to Bank */}
<TouchableOpacity style={styles.card}>
<FontAwesome5 name="university" size={28} color="#0F2A44"/>
<View style={styles.cardText}>
<Text style={styles.small}>Transfer to bank</Text>
<Text style={styles.title}>Wallet to Bank</Text>
</View>
</TouchableOpacity>

<Text style={styles.section}>Recent Transaction</Text>

<View style={styles.recentRow}>

<View style={styles.userCard}>
<Text style={styles.avatar}>B</Text>
<Text>Bavani</Text>
</View>

<View style={styles.userCard}>
<Text style={styles.avatar}>B</Text>
<Text>Bhamesh</Text>
</View>

</View>

</View>
</MobileWrapper>
);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F5F5F5",
padding:20
},

header:{
flexDirection:"row",
alignItems:"center",
marginBottom:20
},

headerText:{
fontSize:18,
fontWeight:"600",
marginLeft:10
},

section:{
fontSize:18,
fontWeight:"600",
marginTop:20,
marginBottom:10
},

balanceRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:20
},

balance:{
fontSize:16,
fontWeight:"bold"
},

seeAll:{
color:"#3B82F6"
},

card:{
flexDirection:"row",
backgroundColor:"#EDE7E7",
padding:18,
borderRadius:10,
alignItems:"center",
marginBottom:15
},

cardText:{
marginLeft:15
},

small:{
fontSize:12,
color:"#555"
},

title:{
fontSize:16,
fontWeight:"600"
},

recentRow:{
flexDirection:"row",
marginTop:10
},

userCard:{
backgroundColor:"#EDE7E7",
padding:15,
borderRadius:10,
marginRight:15,
alignItems:"center"
},

avatar:{
fontSize:24,
backgroundColor:"#3B82F6",
color:"#fff",
width:40,
height:40,
textAlign:"center",
lineHeight:40,
borderRadius:6,
marginBottom:5
}

}); 