import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MobileWrapper from "./MobileWrapper";

export default function PhoneScreen() {

  const navigation = useNavigation();

  return (
    <MobileWrapper>
    <View style={styles.container}>

      {/* Image */}
      <Image
        source={require("../assets/images/paypal.png")}
        style={styles.image}
      />

      {/* Title */}
      <Text style={styles.title}>
        Fast & Secure
      </Text>

      {/* Description */}
      <Text style={styles.description}>
        The safe and easier way to pay with Paypal
      </Text>

      {/* Dots Indicator */}
    

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Signin")}
      >
        <Text style={styles.nextText}>Sign In</Text>
      </TouchableOpacity>

      {/* Skip */}
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.skipText}>Create a new account</Text>
      </TouchableOpacity>

    </View>
    </MobileWrapper>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#FFFFFF",
    alignItems:"center",
    padding:20
  },

  image:{
    width:"100%",
    height:280,
    resizeMode:"contain",
    marginTop:40
  },

  title:{
    fontSize:22,
    textAlign:"center",
    color:"#0F2A44",
    fontFamily:"Inter_600SemiBold",
    marginTop:20
  },

  description:{
    textAlign:"center",
    fontSize:16,
    color:"#000",
    marginTop:10,
    paddingHorizontal:20,
    fontFamily:"Inter_400Regular"
  },

  dotsContainer:{
    flexDirection:"row",
    marginTop:20
  },

  dot:{
    width:8,
    height:8,
    borderRadius:4,
    borderWidth:1,
    borderColor:"#00A6ED",
    marginHorizontal:5
  },

  activeDot:{
    width:8,
    height:8,
    borderRadius:4,
    backgroundColor:"#0F2A44",
    marginHorizontal:5
  },

  nextButton:{
    backgroundColor:"#0F2A44",
    width:"80%",
    padding:14,
    borderRadius:6,
    alignItems:"center",
    marginTop:180
  },

  nextText:{
    color:"#FFF",
    fontSize:16,
    fontFamily:"Inter_600SemiBold"
  },

  skipText:{
    marginTop:15,
    fontSize:16,
    color:"#0F2A44",
    fontFamily:"Inter_400Regular"
  }

});