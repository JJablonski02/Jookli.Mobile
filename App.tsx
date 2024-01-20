import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Navigation} from './src/navigation';
import {SafeAreaProvider} from "react-native-safe-area-context";
import fonts from "./src/constants/Font"
import {useFonts} from 'expo-font'
import { NativeModules, Platform } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  const [loadedFont] = useFonts(fonts);
  if(!loadedFont){
    console.log("Fonts not loaded, your application wont start")
  }
  const locale = NativeModules.I18nManager.localeIdentifier; //reads the device language
  console.log(locale);
  return(
    <AuthProvider>
      <SafeAreaProvider>
          <Navigation/>
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
