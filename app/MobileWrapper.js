import React from "react";
import { View, StyleSheet, useWindowDimensions, ScrollView, Platform } from "react-native";

export default function MobileWrapper({ children }) {
  const { width } = useWindowDimensions();

  const containerWidth = width < 768 ? "100%" : 375;

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.appContainer, { width: containerWidth }]}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
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
    borderRadius: Platform.OS === "web" ? 12 : 0,
    overflow: "hidden",
  },
});