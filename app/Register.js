import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MobileWrapper from "./MobileWrapper";


export default function Register(){

const router = useRouter();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [password,setPassword] = useState("");

const handleRegister = async () => {

if(!name || !email || !phone || !password){
Alert.alert("Please fill all fields");
return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email)){
Alert.alert("Enter valid email");
return;
}

if(phone.length !== 10){
Alert.alert("Enter valid mobile number");
return;
}

// Generate OTP
const otp = Math.floor(1000 + Math.random() * 9000);

// Demo OTP alert
Alert.alert("Your OTP", otp.toString());

// Save temporary user
const user = {
name,
email,
phone,
password
};

await AsyncStorage.setItem("tempUser", JSON.stringify(user));

router.push({
pathname:"/OtpScreen",
params:{
otp: otp,
phone: phone
}
});

};

return(
<MobileWrapper>
<View style={styles.container}>

<Text style={styles.heading}>Create Account</Text>

<TextInput
placeholder="Full Name"
style={styles.input}
value={name}
onChangeText={setName}
/>

<TextInput
placeholder="Email"
style={styles.input}
value={email}
onChangeText={setEmail}
keyboardType="email-address"
/>

<TextInput
placeholder="Mobile Number"
keyboardType="phone-pad"
style={styles.input}
value={phone}
onChangeText={setPhone}
maxLength={10}
/>

<TextInput
placeholder="Password"
secureTextEntry
style={styles.input}
value={password}
onChangeText={setPassword}
/>

<TouchableOpacity style={styles.button} onPress={handleRegister}>
<Text style={styles.buttonText}>Register</Text>
</TouchableOpacity>

</View>
</MobileWrapper>
);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#FFF",
justifyContent:"center",
padding:25
},

heading:{
fontSize:22,
textAlign:"center",
marginBottom:25,
color:"#0F2A44"
},

input:{
backgroundColor:"#EDE7E7",
padding:14,
borderRadius:6,
marginBottom:15
},

button:{
backgroundColor:"#0F2A44",
padding:15,
borderRadius:6,
alignItems:"center"
},

buttonText:{
color:"#FFF",
fontSize:16
}

});