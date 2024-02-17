import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import Spacing from "../../constants/Spacing";
import SettingsDropdown from "./nestedComponents/SettingsDropdown";
import SettingsButtonSave from "./nestedComponents/SettingsButtonSave";
import TextV from "../global/Text";
import  SettingsDatePicker  from "./nestedComponents/SettingsDatePicker";

const SettingsInfoComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextV style={styles.title}>Basic informations</TextV>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <SettingsDropdown label="Gender" />
        <SettingsDropdown label="Country"/>
      </View>
      <View
        style={{ flexDirection: "row", justifyContent: "space-between" }}>
      </View>
      <SettingsButtonSave/>
      <View style={{marginTop: Spacing * 2}}>
        <TextV style={styles.title}>Experience</TextV>
        <SettingsDropdown/>
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
