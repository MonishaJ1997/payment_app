import React from "react";
import { useFonts, Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { View, Text, StyleSheet, useWindowDimensions, Platform } from "react-native";

export default function AppFontLoader({ children }) {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  if (!fontsLoaded) {
    return (
      <View style={[styles.loadingContainer, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT }]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.outerContainer}>
      <View
        style={[
          styles.appContainer,
          {
            width: SCREEN_WIDTH < 768 ? SCREEN_WIDTH : 375,
            height: SCREEN_HEIGHT,
          },
        ]}
      >
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    width: "100%",
    height: "100vh",
  },
  appContainer: {
    backgroundColor: "#fff",
    overflow: "hidden",
    alignSelf: "center",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});