import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import MobileWrapper from "./MobileWrapper";


export default function PaymentDetails(){

const { name, amount, reason } = useLocalSearchParams();

return(
<MobileWrapper>
<View style={styles.container}>

<Text style={styles.title}>Payment Details</Text>

<View style={styles.card}>

<Text style={styles.label}>Receiver</Text>
<Text style={styles.value}>{name}</Text>

<Text style={styles.label}>Amount</Text>
<Text style={styles.value}>₹{amount}</Text>

<Text style={styles.label}>Reason</Text>
<Text style={styles.value}>{reason || "Not Provided"}</Text>

<Text style={styles.label}>Status</Text>
<Text style={styles.success}>Successful</Text>

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

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:20
},

card:{
backgroundColor:"#fff",
padding:20,
borderRadius:8,
elevation:3
},

label:{
color:"#888",
marginTop:10
},

value:{
fontSize:18,
fontWeight:"600"
},

success:{
color:"green",
fontWeight:"bold",
marginTop:5
}

});