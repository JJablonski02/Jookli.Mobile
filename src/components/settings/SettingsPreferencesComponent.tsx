import React from "react";
import {
  View,
  Touchable,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SettingsVerifyEmail from "./nestedComponents/SettingsVerifyEmail";
import SettingsTextInput from "./nestedComponents/SettingsTextInput";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import { TextInput } from "react-native-paper";
import SettingsDropdown from "./nestedComponents/SettingsDropdown";
import SettingsDisplayProfitOne from "./nestedComponents/SettingsDisplayProfitOne";

const SettingsPreferencesComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <SettingsVerifyEmail />
      <Text style={styles.title}>Change email address</Text>
      <SettingsTextInput />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.textContainer}>Save</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Language and time zone</Text>
      <SettingsDropdown/>
      <SettingsDropdown/>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.textContainer}>Save</Text>
      </TouchableOpacity>
      <SettingsDisplayProfitOne/>
    </View>
  );
};

export default SettingsPreferencesComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing * 2,
    marginHorizontal: Spacing * 3,
  },
  title: {
    fontSize: 14,
    fontFamily: "PoppinsBold",
    marginTop: Spacing * 2,
  },
  section: {
    marginTop: Spacing,
  },
  buttonContainer: {
    elevation: 5,
    padding: 3,
    borderRadius: Spacing * 2,
    backgroundColor: Colors.primary,
    marginTop: Spacing * 2,
    width: 200,
    shadowOpacity: 0.5,
    alignSelf: "center",
  },
  textContainer: {
    textAlign: "center",
    color: Colors.background,
    fontSize: FontSize.medium,
    fontWeight: "bold",
  },
});
