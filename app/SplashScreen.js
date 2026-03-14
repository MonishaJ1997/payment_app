import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import MobileWrapper from "./MobileWrapper";
export default function SplashScreen() {

  const router = useRouter();

  return (
    <MobileWrapper>
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/paypal.png")}
          style={styles.logo}
        />

      
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/Onboarding1")}
      >
        <Text style={styles.buttonText}>Get Start</Text>
      </TouchableOpacity>

    </View>
 </MobileWrapper>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFFFFF",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:80
  },

  logoContainer:{
    alignItems:"center",
    marginTop:120
  },

  logo:{
    width:350,
    height:350
  },

  title:{
    marginTop:10,
    fontSize:20,
    color:"#0F2A44"
  },

  button:{
    width:"80%",
    backgroundColor:"#0F2A44",
    padding:14,
    borderRadius:6,
    alignItems:"center"
  },

  buttonText:{
    color:"#FFFFFF",
    fontSize:20
  }
});