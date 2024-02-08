import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Settings,
} from "react-native";
import SettingsVerifyEmail from "./nestedComponents/SettingsVerifyEmail";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import SettingsDropdown from "./nestedComponents/SettingsDropdown";
import SettingsDisplayProfitOne from "./nestedComponents/SettingsDisplayProfitOne";
import SettingsDarkMode from "./nestedComponents/SettingsDarkMode";
import SettingsAccountIdentifier from "./nestedComponents/SettingsAccountIdentifier";
import { NotifierRoot } from "react-native-notifier";
import SettingsButtonSave from "./nestedComponents/SettingsButtonSave";

const SettingsInfoComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic informations</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <SettingsDropdown />
        <SettingsDropdown />
      </View>
      <View
        style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <SettingsDropdown/>
          <SettingsDropdown/>
          <SettingsDropdown/>
      </View>
      <SettingsButtonSave/>
      <View style={{marginTop: Spacing * 2}}>
        <Text style={styles.title}>Experience</Text>
        <SettingsDropdown/>
        <SettingsDropdown/>
        <SettingsButtonSave/>
      </View>
      <View style={{marginVertical: Spacing * 2}}>
        <Text style={styles.title}>Subcategories</Text>
        <SettingsDropdown/>
        <SettingsDropdown/>
        <SettingsButtonSave/>
      </View>
    </View>
  );
};

export default SettingsInfoComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing * 2,
    marginHorizontal: Spacing * 3,
    marginBottom: Spacing * 2,
  },
  title: {
    fontSize: 14,
    fontFamily: "PoppinsBold",
  },
  description: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    marginTop: Spacing,
  },
});
