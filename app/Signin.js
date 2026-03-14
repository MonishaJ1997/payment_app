import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MobileWrapper from "./MobileWrapper";

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    try {
      // Fetch all registered users
      const storedUsers = await AsyncStorage.getItem("users");
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      // Find user with matching email and password
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        // Save logged-in user email
        await AsyncStorage.setItem("loggedInUser", user.email);

        Alert.alert("Login Successful", `Welcome, ${user.name}!`);
        router.replace("/HomeScreen");
      } else {
        Alert.alert("Login Failed", "Incorrect email or password");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
    <MobileWrapper>
      <View style={styles.container}>
        <Text style={styles.heading}>Sign in</Text>

        <Text style={styles.subText}>
          To sign in to an account in the application,
          enter your email and password
        </Text>

        {/* Email */}
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Password */}
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        {/* Forgot password */}
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>

        {/* Continue */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        {/* Create account */}
        <Text style={styles.accountText}>
          Don't have an account yet?
        </Text>

        <TouchableOpacity
          style={styles.createButton}
          onPress={() => router.push("/Register")}
        >
          <Text style={styles.createText}>Create an account</Text>
        </TouchableOpacity>

        {/* Apple login */}
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../assets/images/apple.png")}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Sign in with Apple</Text>
        </TouchableOpacity>

        {/* Google login */}
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../assets/images/google.png")}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Sign in with Google</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>
          By clicking "Continue", I have read and agree with the
          Term Sheet, Privacy Policy
        </Text>
      </View>
    </MobileWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 25,
    justifyContent: "center"
  },
  heading: {
    fontSize: 22,
    color: "#0F2A44",
    textAlign: "center",
    marginBottom: 10
  },
  subText: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 25,
    color: "#333"
  },
  input: {
    backgroundColor: "#EDE7E7",
    padding: 14,
    borderRadius: 5,
    marginBottom: 12
  },
  forgot: {
    textAlign: "right",
    marginBottom: 20,
    color: "#0F2A44"
  },
  button: {
    backgroundColor: "#0F2A44",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 25
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16
  },
  accountText: {
    textAlign: "center",
    marginBottom: 10
  },
  createButton: {
    backgroundColor: "#EDE7E7",
    padding: 15,
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 20
  },
  createText: {
    color: "#0F2A44"
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDE7E7",
    padding: 15,
    borderRadius: 6,
    marginBottom: 10
  },
  socialText: {
    marginLeft: 10
  },
  icon: {
    width: 20,
    height: 20
  },
  footer: {
    fontSize: 12,
    marginTop: 20,
    textAlign: "center",
    color: "#555"
  }
});