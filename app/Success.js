import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import MobileWrapper from "./MobileWrapper";


export default function Success(){

const router = useRouter();
const { name, amount, reason } = useLocalSearchParams();

return(
<MobileWrapper>
<View style={styles.container}>

<Ionicons name="checkmark-circle" size={120} color="#0F2A44"/>

<Text style={styles.title}>
Transferred Successfully
</Text>

<Text style={styles.sub}>
₹{amount} sent to {name}
</Text>

<TouchableOpacity
style={styles.detailsBtn}
onPress={()=>router.push({
pathname:"/PaymentDetails",
params:{name,amount,reason}
})}
>
<Text style={styles.detailsText}>View Details</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.continueBtn}
onPress={()=>router.replace("/Home")}
>
<Text style={styles.continueText}>Continue</Text>
</TouchableOpacity>

</View>
</MobileWrapper>
);
}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#F5F5F5",
padding:20
},

title:{
fontSize:24,
fontWeight:"600",
marginTop:20
},

sub:{
marginTop:10,
color:"#444"
},

detailsBtn:{
backgroundColor:"#0F2A44",
width:"90%",
padding:15,
borderRadius:6,
alignItems:"center",
marginTop:30
},

detailsText:{
color:"#fff"
},

continueBtn:{
borderWidth:1,
borderColor:"#0F2A44",
width:"90%",
padding:15,
borderRadius:6,
alignItems:"center",
marginTop:10
},

continueText:{
color:"#0F2A44"
}

});