
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MobileWrapper from "./MobileWrapper";
export default function OtpScreen(){

const router = useRouter();

const { otp, phone } = useLocalSearchParams();

const [userOtp,setUserOtp] = useState("");

useEffect(()=>{
console.log("Generated OTP:", otp);
},[]);

const verifyOtp = async () => {

if(userOtp == otp){

try{

// get temporary user saved during register
const tempUser = await AsyncStorage.getItem("tempUser");

// save as permanent user
await AsyncStorage.setItem("user", tempUser);

// remove temporary data
await AsyncStorage.removeItem("tempUser");

Alert.alert("Success","OTP Verified & Account Created");

// go to signin page
router.replace("/Signin");

}catch(error){

Alert.alert("Error","Something went wrong");

}

}else{

Alert.alert("Invalid OTP");

}

};

return(
<MobileWrapper>
<View style={styles.container}>

<Text style={styles.title}>OTP Verify!</Text>

<Text style={styles.subtitle}>
Enter 4-digit verification code to your mobile number
</Text>

<Text style={styles.phone}>
******{phone?.slice(-3)}
</Text>

<TextInput
style={styles.input}
keyboardType="number-pad"
maxLength={4}
value={userOtp}
onChangeText={setUserOtp}
/>

<TouchableOpacity style={styles.button} onPress={verifyOtp}>
<Text style={styles.buttonText}>Continue</Text>
</TouchableOpacity>

</View>
</MobileWrapper>
);

}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
padding:30,
backgroundColor:"#F5F5F5"
},

title:{
fontSize:24,
fontWeight:"bold",
marginBottom:10
},

subtitle:{
color:"#555",
marginBottom:10
},

phone:{
marginBottom:40,
color:"#0F2A44"
},

input:{
borderWidth:1,
borderColor:"#4DA3FF",
borderRadius:6,
padding:15,
textAlign:"center",
fontSize:22,
letterSpacing:10,
backgroundColor:"#FFF",
marginBottom:40
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

