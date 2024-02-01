import React from "react";
import { View, Touchable, Text, Switch, StyleSheet} from "react-native";
import SettingsVerifyEmail from "./nestedComponents/SettingsVerifyEmail";

const SettingsPreferencesComponent = () => {
  return (
    <View>
        <SettingsVerifyEmail/>
    </View>
  );
}

export default SettingsPreferencesComponent;