import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Settings,
} from "react-native";
import SettingsVerifyEmail from "./nestedComponents/SettingsVerifyEmail";
import SettingsTextInput, { Variant } from "./nestedComponents/SettingsTextInput";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import SettingsDropdown from "./nestedComponents/SettingsDropdown";
import SettingsDisplayProfitOne from "./nestedComponents/SettingsDisplayProfitOne";
import SettingsDarkMode from "./nestedComponents/SettingsDarkMode";
import SettingsAccountIdentifier from "./nestedComponents/SettingsAccountIdentifier";
import { NotifierRoot } from "react-native-notifier";
import SettingsButtonSave from "./nestedComponents/SettingsButtonSave";

const SettingsHelpComponent : React.FC = () => {
    return (
        <View style={styles.container}>
                <Text style={styles.title}>Contact data</Text>
                <SettingsTextInput placeholder="First Name" variant={Variant.FirstName}/>
                <SettingsTextInput placeholder="Last Name" variant={Variant.LastName}/>
                <SettingsDropdown/>
                <SettingsTextInput placeholder="PhoneNumber" variant={Variant.PhoneNumber}/>
                <SettingsButtonSave/>
        </View>
    )
};

export default SettingsHelpComponent;

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