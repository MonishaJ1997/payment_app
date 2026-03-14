import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MobileWrapper from "./MobileWrapper";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !phone || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Enter valid email");
      return;
    }

    if (phone.length !== 10) {
      Alert.alert("Error", "Enter valid 10-digit mobile number");
      return;
    }

    try {
      // Fetch existing users
      const storedUsers = await AsyncStorage.getItem("users");
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      // Check if email already exists
      if (users.find((u) => u.email === email)) {
        Alert.alert("Error", "Email already registered. Please login.");
        return;
      }

      const newUser = { name, email, phone, password };

      users.push(newUser);
      await AsyncStorage.setItem("users", JSON.stringify(users));

      Alert.alert("Success", "Registration successful! You can now login.");
      router.replace("/Signin");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
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
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          maxLength={10}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </MobileWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 25, justifyContent: "center" },
  heading: { fontSize: 22, fontWeight: "bold", textAlign: "center", color: "#0F2A44", marginBottom: 25 },
  input: { backgroundColor: "#EDE7E7", padding: 14, borderRadius: 6, marginBottom: 15 },
  button: { backgroundColor: "#0F2A44", padding: 15, borderRadius: 6, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16 },
});