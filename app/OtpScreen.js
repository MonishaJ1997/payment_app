import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MobileWrapper from "./MobileWrapper";

export default function OtpScreen() {
  const router = useRouter();
  const { otp, phone } = useLocalSearchParams();
  const [userOtp, setUserOtp] = useState("");

  useEffect(() => {
    console.log("Generated OTP:", otp);
  }, []);

  const verifyOtp = async () => {
    if (userOtp === otp) {
      try {
        // Get temporary user saved during register
        const tempUserStr = await AsyncStorage.getItem("tempUser");
        if (!tempUserStr) {
          Alert.alert("Error", "No temporary user found");
          return;
        }
        const tempUser = JSON.parse(tempUserStr);

        // Fetch existing users array
        const storedUsers = await AsyncStorage.getItem("users");
        const users = storedUsers ? JSON.parse(storedUsers) : [];

        // Add temp user to users array
        users.push(tempUser);
        await AsyncStorage.setItem("users", JSON.stringify(users));

        // Remove temporary data
        await AsyncStorage.removeItem("tempUser");

        Alert.alert("Success", "OTP Verified & Account Created");

        // Navigate to Signin
        router.replace("/Signin");
      } catch (error) {
        console.log(error);
        Alert.alert("Error", "Something went wrong");
      }
    } else {
      Alert.alert("Invalid OTP");
    }
  };

  return (
    <MobileWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>Enter the 4-digit code sent to your mobile number</Text>
        <Text style={styles.phone}>******{phone?.slice(-3)}</Text>

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
  container: { flex: 1, justifyContent: "center", padding: 30, backgroundColor: "#F5F5F5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { color: "#555", marginBottom: 10 },
  phone: { marginBottom: 40, color: "#0F2A44" },
  input: { borderWidth: 1, borderColor: "#4DA3FF", borderRadius: 6, padding: 15, textAlign: "center", fontSize: 22, letterSpacing: 10, backgroundColor: "#FFF", marginBottom: 40 },
  button: { backgroundColor: "#0F2A44", padding: 15, borderRadius: 6, alignItems: "center" },
  buttonText: { color: "#FFF", fontSize: 16 },
});