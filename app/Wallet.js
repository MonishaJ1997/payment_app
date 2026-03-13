import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import MobileWrapper from "./MobileWrapper";

export default function Wallet(){

const router = useRouter();

const [contactless,setContactless] = useState(true);
const [online,setOnline] = useState(true);
const [atm,setAtm] = useState(true);

return(
<MobileWrapper>
<View style={styles.container}>

<View style={styles.header}>
<TouchableOpacity onPress={()=>router.back()}>
<Ionicons name="chevron-back" size={24}/>
</TouchableOpacity>
<Text style={styles.headerText}>My Card</Text>
</View>

<Image
source={require("../assets/images/wallet.png")}
style={styles.card}
/>

<Text style={styles.section}>Card Setting</Text>

<View style={styles.option}>
<Text>Contactless payment</Text>
<Switch value={contactless} onValueChange={setContactless}/>
</View>

<View style={styles.option}>
<Text>Online payment</Text>
<Switch value={online} onValueChange={setOnline}/>
</View>

<View style={styles.option}>
<Text>ATM Withdraws</Text>
<Switch value={atm} onValueChange={setAtm}/>
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

card:{
width:"100%",
height:180,
resizeMode:"contain",
marginBottom:20
},

section:{
fontSize:18,
fontWeight:"600",
marginBottom:15
},

option:{
flexDirection:"row",
justifyContent:"space-between",
backgroundColor:"#eee",
padding:15,
borderRadius:10,
marginBottom:10
}

});