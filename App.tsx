import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import {SafeAreaProvider} from "react-native-safe-area-context";
import fonts from "./src/constants/Font"

export default function App() {
  return (
    <SafeAreaProvider>
          <Navigation/>
    </SafeAreaProvider>
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
