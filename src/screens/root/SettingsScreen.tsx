import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Switch,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import SettingsProfileComponent from "../../components/settings/SettingsProfileComponent";
import SettingsPreferencesComponent from "../../components/settings/SettingsPreferencesComponent";
import SettingsPaymentsComponent from "../../components/settings/SettingsPaymentsComponent";
import SettingsPrivacyComponent from "../../components/settings/SettingsPrivacyComponent";
import SettingsInfoComponent from "../../components/settings/SettingsInfoComponent";
import { KeyBoardAwareScrollViewSettings } from "../../components/KeyboardScrollView";
import TextV from "../../components/global/Text";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

const SECTIONS = [
  { header: "Preferences", component: <SettingsPreferencesComponent /> },
  { header: "Payments", component: <SettingsPaymentsComponent /> },
  { header: "Privacy", component: <SettingsPrivacyComponent /> },
  { header: "Informations", component: <SettingsInfoComponent /> },
];

interface CompProps {
  label: string;
}

const SectionComponent: React.FC<CompProps> = ({ label }) => {
  const section = SECTIONS.find((section) => section.header === label);
  return section ? section.component : null;
};

const SettingsScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [value, setValue] = React.useState(0);

  return (
    <KeyBoardAwareScrollViewSettings>
        <SettingsProfileComponent />
        <View style={styles.content}>
          <View style={styles.tabs}>
            {SECTIONS.map(({ header }, index) => (
              <View
                key={header}
                style={[
                  styles.tabWrapper,
                  index === value && { borderBottomColor: Colors.primary },
                ]}
              >
                <TouchableOpacity onPress={() => setValue(index)}>
                  <View style={styles.tab}>
                    <TextV
                      style={[
                        styles.tabText,
                        index === value && { color: Colors.primary },
                      ]}
                      allowFontScaling={false}
                    >
                      {header}
                    </TextV>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          {SectionComponent({ label: SECTIONS[value].header })}
        </View>
      </KeyBoardAwareScrollViewSettings>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  content: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
  },
  tabs: {
    padding: 16,
    flexDirection: "row",
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    position: "relative",
    overflow: "hidden",
  },
  tabWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6b7280",
    marginLeft: 5,
  },
});
