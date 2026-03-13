import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MobileWrapper from "./MobileWrapper";
export default function Onboarding4() {

  const navigation = useNavigation();

  return (
    <MobileWrapper>
    <View style={styles.container}>

      {/* Image */}
      <Image
        source={require("../assets/images/onboarding4.png")}
        style={styles.image}
      />

      {/* Title */}
      <Text style={styles.title}>
        Check out fastest card link in{"\n"}Paypal
      </Text>

      {/* Description */}
      <Text style={styles.description}>
        Up to 10 day of buyer protection mobile payment
        has been sent to yourself with free return
        shopping and faster.
      </Text>

      {/* Dots Indicator */}
      <View style={styles.dotsContainer}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.activeDot}></View>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("PhoneScreen")}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>

      {/* Skip */}
      <TouchableOpacity onPress={() => navigation.navigate("PhoneScreen")}>
        <Text style={styles.skipText}>Skip</Text>
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
    height:330,
    resizeMode:"contain",
    marginTop:50
  },

  title:{
    fontSize:22,
    textAlign:"center",
    color:"#0F2A44",
    fontFamily:"Inter_600SemiBold",
    marginTop:40
  },

  description:{
    textAlign:"center",
    fontSize:16,
    color:"#000",
    marginTop:30,
    paddingHorizontal:20,
    fontFamily:"Inter_400Regular"
  },

  dotsContainer:{
    flexDirection:"row",
    marginTop:40
  },

  dot:{
    width:13,
    height:13,
    borderRadius:50,
    borderWidth:1,
    borderColor:"#00A6ED",
    marginHorizontal:5
  },

  activeDot:{
    width:13,
    height:13,
    borderRadius:50,
    backgroundColor:"#0F2A44",
    marginHorizontal:5
  },

  nextButton:{
    backgroundColor:"#0F2A44",
    width:"80%",
    padding:14,
    borderRadius:6,
    alignItems:"center",
    marginTop:75
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
    fontFamily:"Inter_600SemiBold"
  }

});