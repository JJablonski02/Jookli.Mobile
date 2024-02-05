import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fonts from "./src/constants/Font";
import { NativeModules, Platform } from "react-native";
import { AuthProvider } from "./src/context/AuthContext";
import * as Font from "expo-font";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { NotifierWrapper } from "react-native-notifier";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "./src/constants/Colors";

export default function App() {
  const [loaded, error] = useFonts(fonts);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

/* translucentStatusBar is a parameter only for android*/
  return (
    loaded && (
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.gesture}>
          <NotifierWrapper translucentStatusBar={true}> 
            <AuthProvider>
              <Navigation />
            </AuthProvider>
          </NotifierWrapper>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    )
  );
}

const styles = StyleSheet.create({
  gesture: {
    height: "100%",
    width: "100%",
  },
});
