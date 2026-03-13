import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity,
TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import MobileWrapper from "./MobileWrapper";


export default function Paying(){

const router = useRouter();
const { name } = useLocalSearchParams();

const [amount,setAmount] = useState("");
const [reason,setReason] = useState("");

/* PRESS NUMBER */
const pressKey = (num) => {
setAmount(prev => prev + num);
};

/* DELETE NUMBER */
const deleteKey = () => {
setAmount(prev => prev.slice(0,-1));
};

return(
<MobileWrapper>
<View style={styles.container}>

{/* HEADER */}
<View style={styles.header}>
<TouchableOpacity onPress={()=>router.back()}>
<Text style={styles.back}>{"< Paying Money"}</Text>
</TouchableOpacity>
</View>

{/* USER INFO */}
<View style={styles.userBox}>

<View style={styles.avatar}>
<Text style={styles.avatarText}>
{name ? name.charAt(0).toUpperCase() : "B"}
</Text>
</View>

<Text style={styles.username}>
{name || "Bhamesh Kumar"}
</Text>

</View>

{/* AMOUNT */}
<View style={styles.amountBox}>
<Text style={styles.amount}>
₹ {amount || "0"}
</Text>
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
onPress={()=>router.push({
pathname:"/Success",
params:{ name, amount, reason }
})}
>
<Ionicons name="arrow-forward" size={22} color="#fff"/>
</TouchableOpacity>
</View>

{/* KEYPAD */}
<View style={styles.keypad}>

{["1","2","3","4","5","6","7","8","9"].map((num)=>(
<TouchableOpacity
key={num}
style={styles.key}
onPress={()=>pressKey(num)}
>
<Text style={styles.keyText}>{num}</Text>
</TouchableOpacity>
))}

<TouchableOpacity style={styles.key}>
<Text style={styles.keyText}>#</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.key}
onPress={()=>pressKey("0")}
>
<Text style={styles.keyText}>0</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.key}
onPress={deleteKey}
>
<Ionicons name="backspace" size={22}/>
</TouchableOpacity>

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
marginTop:40
},

back:{
fontSize:18,
fontWeight:"600",
color:"#0F2A44"
},

userBox:{
alignItems:"center",
marginTop:20
},

avatar:{
width:70,
height:70,
borderRadius:10,
backgroundColor:"#4A90E2",
justifyContent:"center",
alignItems:"center"
},

avatarText:{
color:"#fff",
fontSize:28,
fontWeight:"bold"
},

username:{
marginTop:10,
fontSize:16
},

amountBox:{
backgroundColor:"#E6E1E1",
padding:25,
marginTop:30,
alignItems:"center",
borderRadius:6
},

amount:{
fontSize:28,
fontWeight:"bold",
color:"#0F2A44"
},

reason:{
backgroundColor:"#E6E1E1",
marginTop:20,
padding:12,
borderRadius:6
},

arrowRow:{
alignItems:"flex-end",
marginTop:10
},

nextBtn:{
backgroundColor:"#0F2A44",
width:45,
height:45,
borderRadius:6,
justifyContent:"center",
alignItems:"center"
},

keypad:{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between",
marginTop:30
},

key:{
width:"30%",
backgroundColor:"#E6E1E1",
padding:18,
alignItems:"center",
borderRadius:6,
marginBottom:15
},

keyText:{
fontSize:20,
fontWeight:"600"
}

});