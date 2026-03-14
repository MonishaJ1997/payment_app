import React from "react";
import { useFonts, Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function AppFontLoader({ children }) {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  if (!fontsLoaded) {
    return (
      <View style={[styles.loadingContainer, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT }]}>
       
      </View>
    );
  }

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.appContainer, { width: SCREEN_WIDTH < 768 ? SCREEN_WIDTH : 375 }]}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  appContainer: {
    flex: 1,
    maxWidth: 375,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  loadingContainer: {
    flex: 1,                     // fill the full screen
    justifyContent: "center",    // vertical center
    alignItems: "center",        // horizontal center
    backgroundColor: "#f0f0f0",
  },
  loadingText: {
    fontSize: 18,
    color: "#0F2A44",
    fontWeight: "bold",
  },
});