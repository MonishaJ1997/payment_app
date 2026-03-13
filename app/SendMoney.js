import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import MobileWrapper from "./MobileWrapper";


export default function SendMoney(){

const router = useRouter();
const [selectedUser,setSelectedUser] = useState(null);

const users = [
{ id:1, name:"Bhamesh kumar", letter:"B" },
{ id:2, name:"Hari kumar", letter:"H" },
{ id:3, name:"Bavani", letter:"B" },
{ id:4, name:"Tamil selvi", letter:"T" }
];

const goToPayment = () => {

if(!selectedUser) return;

router.push({
pathname:"/Paying",
params:{
name:selectedUser.name,
letter:selectedUser.letter
}
});

};

return(
<MobileWrapper>
<View style={styles.container}>

<Text style={styles.title}>Send Money</Text>

<Text style={styles.balance}>₹ 2,80,000</Text>

<Text style={styles.section}>Recent transaction</Text>

<FlatList
data={users}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>(

<TouchableOpacity
style={[
styles.row,
selectedUser?.id === item.id && styles.activeRow
]}
onPress={()=>setSelectedUser(item)}
>

<View style={styles.avatar}>
<Text style={styles.avatarText}>{item.letter}</Text>
</View>

<Text style={styles.name}>{item.name}</Text>

</TouchableOpacity>

)}
/>

<TouchableOpacity
style={styles.sendBtn}
onPress={goToPayment}
>

<Text style={styles.sendText}>Send Money</Text>

</TouchableOpacity>

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
fontSize:20,
fontWeight:"600",
marginBottom:10
},

balance:{
fontSize:18,
marginBottom:20
},

section:{
fontSize:16,
marginBottom:10
},

row:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#EDE7E7",
padding:15,
borderRadius:8,
marginBottom:10
},

activeRow:{
backgroundColor:"#CFE8FF"
},

avatar:{
width:40,
height:40,
backgroundColor:"#3B82F6",
borderRadius:6,
justifyContent:"center",
alignItems:"center",
marginRight:10
},

avatarText:{
color:"#fff",
fontSize:18
},

name:{
fontSize:16
},

sendBtn:{
backgroundColor:"#0F2A44",
padding:15,
borderRadius:8,
alignItems:"center",
marginTop:20
},

sendText:{
color:"#fff",
fontSize:16
}

});