import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Navigation} from './src/navigation';
import {SafeAreaProvider} from "react-native-safe-area-context";
import fonts from "./src/constants/Font"
import { NativeModules, Platform } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import * as Font from 'expo-font'
import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded, error] = useFonts(fonts);
 
useEffect(() => {
if (error) throw error;
}, [error]);

  return(loaded && 
    (<AuthProvider>
      <SafeAreaProvider>
        <Navigation/>
      </SafeAreaProvider>
    </AuthProvider>)
  );
}


