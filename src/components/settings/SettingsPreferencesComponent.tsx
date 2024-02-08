import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SettingsVerifyEmail from "./nestedComponents/SettingsVerifyEmail";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import SettingsDropdown from "./nestedComponents/SettingsDropdown";
import SettingsDisplayProfitOne from "./nestedComponents/SettingsDisplayProfitOne";
import SettingsDarkMode from "./nestedComponents/SettingsDarkMode";
import SettingsAccountIdentifier from "./nestedComponents/SettingsAccountIdentifier";
import SettingsTextInput from "./nestedComponents/SettingsTextInput";

const SettingsPreferencesComponent: React.FC = () => {
  const [Email, setEmail] = React.useState<string>("");
  return (
    <View style={styles.container}>
      <SettingsVerifyEmail />
      <Text style={styles.title}>Change email address</Text>
      <SettingsTextInput placeholder="Email" onChangeText={setEmail} />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.textContainer}>Save</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Language and time zone</Text>
      <SettingsDropdown/>
      <SettingsDropdown/>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.textContainer}>Save</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Display profit as</Text>
      <SettingsDisplayProfitOne/>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.textContainer}>Save</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Dark mode</Text>
      <SettingsDarkMode/>
      <Text style={styles.title}>Account Identifier</Text>
      <SettingsAccountIdentifier/>
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
