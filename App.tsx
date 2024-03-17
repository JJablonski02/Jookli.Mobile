import { AppRegistry, StyleSheet, Text, View } from "react-native";
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
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import { SetDefaultAppLanguage } from "./services/i18nextDetector";
import { Provider, useSelector } from "react-redux";
import { store, saveCurrentDeviceInfo } from "./src/redux/store/store";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { REACT_APP_API_URL } from "@env";

export default function App() {

  const {t} = useTranslation();

  const [loaded, error] = useFonts(fonts);
  useEffect(() => {
    saveCurrentDeviceInfo();
    axios.defaults.baseURL = REACT_APP_API_URL;
    axios.defaults.timeout = 5000;

    if (error) throw error;
  }, [error]);

  //Main enter to entire application
  //SafeAreaProvider detects safe area to display
  //GestureHandler
  //NotifierWrapper provides access to InApp Notifications
  //Provider is a redux provider
  //Navigation is a main navigation
  return (
    loaded && (
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.gesture}>
          <NotifierWrapper> 
            <AuthProvider>
              <Provider store={store}>
              <Navigation />
              </Provider>
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
