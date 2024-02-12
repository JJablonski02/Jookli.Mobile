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
import { SetDefaultAppLanguage } from "./services/i18nextDetector";
import CustomSafeAreaView from "./src/components/SafeViewAndroid";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";

export default function App() {
  const [loaded, error] = useFonts(fonts);
  
  useEffect(() => {
    const setDefaultLanguage = async () => {
      try{
        await SetDefaultAppLanguage(); //Detects and sets the language of the app
      }catch(e){
        console.log("Tak" + e);
      }
    };
    setDefaultLanguage();

    if (error) throw error;
  }, [error]);

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
