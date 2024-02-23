import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import Spacing from "../../constants/Spacing";
import SettingsDropdown from "./nestedComponents/SettingsDropdown";
import SettingsButtonSave from "./nestedComponents/SettingsButtonSave";
import TextV from "../global/Text";
import SettingsDatePicker  from "./nestedComponents/SettingsDatePicker";
import CountryPhoneCodes from "../../../locales/options/countryPhoneCodes.json";
import { moderateScale } from "../../constants/FontSize";
import { SettingsSafeView } from "./nestedComponents/SettingsSafeView";
import SettingsModalView from "./nestedComponents/SettingsModalView";

const DATASOURCE = [
  { label: 'Other', value: '0' },
  { label: 'Male', value: '1' },
  { label: 'Female', value: '2' },
];

interface Props{
  label: string;
  value: string;
}

const fetchCountryData = () => {
  const data: Props[] = CountryPhoneCodes.map((item: any) => {
    return {
      label: item.country,
      value: item.country,
    };
  });
  return data;
}



const SettingsInfoComponent: React.FC = () => {
  return (
    <SettingsSafeView>
    <View style={styles.container}>
      <TextV style={styles.title}>Basic informations</TextV>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <SettingsDropdown label="Gender" dataSource={DATASOURCE} placeholder="Select gender..."/>
        <SettingsDropdown label="Country" dataSource={fetchCountryData()} placeholder="Select country..."/>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <SettingsDatePicker/>
      </View>
      <SettingsButtonSave/>
      <View style={{marginTop: Spacing * 2}}>
        <TextV style={styles.title}>Experience</TextV>
        <SettingsModalView label="Education" placeholder="Select degree..."/>
        <SettingsDropdown/>
        <SettingsButtonSave/>
      </View>
      <View style={{marginVertical: Spacing * 2}}>
        <TextV style={styles.title}>Subcategories</TextV>
        <SettingsDropdown/>
        <SettingsDropdown/>
        <SettingsButtonSave/>
      </View>
    </View>
    </SettingsSafeView>
  );
};

export default SettingsInfoComponent;

const styles = StyleSheet.create({
  container: {
    gap: Spacing *2,
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: "PoppinsSemiBold",
  },
  description: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    marginTop: Spacing,
  },
});
