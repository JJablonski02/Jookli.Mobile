import React from "react";
import { View, StyleSheet } from "react-native";
import SettingsVerifyEmail from "./nestedComponents/SettingsVerifyEmail";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import SettingsDropdown from "./nestedComponents/SettingsDropdown";
import SettingsDisplayProfitOne from "./nestedComponents/SettingsDisplayProfitOne";
import SettingsDarkMode from "./nestedComponents/SettingsDarkMode";
import SettingsAccountIdentifier from "./nestedComponents/SettingsAccountIdentifier";
import SettingsTextInput from "./nestedComponents/SettingsTextInput";
import SettingsButtonSave from "./nestedComponents/SettingsButtonSave";
import { moderateScale } from "../../constants/FontSize";
import TextV from "../global/Text";
import { SettingsSafeView } from "./nestedComponents/SettingsSafeView";
import Languages from "../../../locales/options/languages.json";
import TimeZones from "../../../locales/options/timezones.json";

interface Props {
  label: string;
  value: string;
};

const fetchLanguageData = () => {
  
  const data : Props[] = Object.keys(Languages).map((key: string) => {
    const language = Languages[key as keyof typeof Languages];
    return {
      label: language.name,
      value: key,
    };
  });
  return data;
};

const fetchTimezoneData = () => {
  const data : Props[] = TimeZones.map((item: any) => {
    return {
      label: item.text,
      value: item.text,
    };
  });
  return data;
};

const SettingsPreferencesComponent: React.FC = () => {
  const [Email, setEmail] = React.useState<string>("");
  return (
    <SettingsSafeView>
      <View style={styles.container}>
        <SettingsVerifyEmail />
        <View>
          <TextV style={styles.title}>Change email address</TextV>
          <SettingsTextInput placeholder="Email" onChangeText={setEmail} />
          <SettingsButtonSave onPress={() => "Email has been changed"} />
        </View>
        <View>
          <TextV style={styles.title}>Language and time zone</TextV>
          <SettingsDropdown
            label="Language"
            placeholder="Select language..."
            dataSource={fetchLanguageData()}
          />
          <SettingsDropdown
            label="Time zone"
            placeholder="Select time zone..."
            dataSource={fetchTimezoneData()}
          />
          <SettingsButtonSave onPress={() => "Email has been changed"} />
        </View>
        <View>
          <TextV style={styles.title}>Display profit as</TextV>
          <SettingsDisplayProfitOne />
          <SettingsButtonSave onPress={() => "Email has been changed"} />
        </View>
        <View>
          <TextV style={styles.title}>Dark mode</TextV>
          <SettingsDarkMode />
        </View>
        <View>
          <TextV style={styles.title}>Account Identifier</TextV>
          <SettingsAccountIdentifier />
        </View>
      </View>
    </SettingsSafeView>
  );
};

export default SettingsPreferencesComponent;

const styles = StyleSheet.create({
  container: {
    gap: Spacing * 2,
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: "PoppinsSemiBold",
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
});
