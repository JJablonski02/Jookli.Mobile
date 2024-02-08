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
import SettingsSwitchComponent from "./nestedComponents/SettingsSwitchComponent";
import SettingsTextInput from "./nestedComponents/SettingsTextInput";

const SettingsPrivacyComponent: React.FC = () => {
  const [FirstName , setFirstName] = React.useState<string>('');
  const [LastName , setLastName] = React.useState<string>('');
  const [PhoneNumber, setPhoneNumber] = React.useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact data</Text>
      <SettingsTextInput placeholder="First Name" onChangeText={setFirstName}/>
      <SettingsTextInput placeholder="Last Name" onChangeText={setLastName}/>
      <SettingsDropdown />
      <SettingsTextInput placeholder="Phone number" onChangeText={setPhoneNumber}/>
      <SettingsButtonSave />
      <View style={{ marginTop: 20 }}>
        <Text style={styles.title}>
          Receiving notifications from the application
        </Text>
        <SettingsSwitchComponent label="When the task is completed"/>
        <SettingsSwitchComponent label="Confirmation that we have sent the transfer to your payment method"/>
        <SettingsSwitchComponent label="New registration from your referral link"/>
        <SettingsSwitchComponent label="When you made money from your referral link"/>
        <SettingsSwitchComponent label="Occasional events and bonuses"/>
        <SettingsButtonSave/>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={styles.title}>Receiving messages</Text>
        <SettingsSwitchComponent label="Personalized help and performance suggestions"/>
        <SettingsSwitchComponent label="Periodic newsletters with tips and best practices"/>
        <SettingsSwitchComponent label="Occasional surveys to help JoyProfits improve the app"/>
        <SettingsSwitchComponent label="special offers - promotions, discount codes"/>
        <SettingsButtonSave/>
        </View>
    </View>
  );
};

export default SettingsPrivacyComponent;

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
