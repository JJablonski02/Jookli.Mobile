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
   Switch } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import React from "react";
import Colors from "../../constants/Colors";
import ionicons from '@expo/vector-icons/Ionicons';
import Spacing from "../../constants/Spacing";
import SettingsProfileComponent from "../../components/settings/SettingsProfileComponent";
import Ionicons from '@expo/vector-icons/Ionicons';
import SettingsPreferencesComponent from "../../components/settings/SettingsPreferencesComponent";
import SettingsPaymentsComponent from "../../components/settings/SettingsPaymentsComponent";


type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const SECTIONS = [
  {
    header: 'Preferences',
    icon: 'settings',
    items: [
      { label: 'Language', value: 'English', type: 'input' },
      { label: 'Dark Mode', value: false, type: 'boolean' },
      { label: 'Use Wi-Fi', value: true, type: 'boolean' },
      { label: 'Location', value: 'Los Angeles, CA', type: 'input' },
      { label: 'Show collaborators', value: true, type: 'boolean' },
      { label: 'Accessibility mode', value: false, type: 'boolean' },
    ],
  },
  {
    header: 'Payments',
  },
  {
    header: 'Help',
    icon: 'help-circle',
    items: [
      { label: 'Item 1', type: 'link' },
      { label: 'Item 2', type: 'input', value: 'Value' },
      { label: 'Item 3', type: 'boolean', value: true },
      { label: 'Item 4', type: 'boolean', value: false },
      { label: 'Item 5', type: 'link' },
    ],
  },
  {
    header: 'Content',
    icon: 'align-center',
    items: [
      { label: 'Item 1', type: 'boolean', value: true},
      { label: 'Item 2', type: 'input', value: 'Value' },
      { label: 'Item 3', type: 'boolean', value: true },
      { label: 'Item 4', type: 'boolean', value: false },
      { label: 'Item 5', type: 'link' },
    ],
  },
];

interface Propss{
  label: string;
}
const SectionComponent: React.FC<Propss> = ({label}) => {
  switch(label){
    case 'Preferences':
        return <SettingsPreferencesComponent/>
      case 'Payments':
        return <SettingsPaymentsComponent/>
      default:
        return null;
  }
};

const SettingsScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [value, setValue] = React.useState(0);
  const { tabs, items } = React.useMemo(() => {
    return {
      tabs: SECTIONS.map(({ header, icon }) => ({
        name: header,
        icon,
      })),
      items: SECTIONS[value].items,
    };
  }, [value]);

  return (
    <SafeAreaView style={{ backgroundColor: '#f8f8f8', flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <SettingsProfileComponent/>
        <View style={styles.content}>
          <View style={styles.tabs}>
            {tabs.map(({ name, icon }, index) => {
              const isActive = index === value;

              return (
                <View
                  key={name}
                  style={[
                    styles.tabWrapper,
                    isActive && { borderBottomColor: Colors.primary},
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      setValue(index);
                    }}>
                    <View style={styles.tab}>
                      <Text
                        style={[
                          styles.tabText,
                          isActive && { color: Colors.primary },
                        ]}>
                        {name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          {SectionComponent({label: tabs[value].name})}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  content: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  tabs: {
    padding: 16,
    flexDirection: 'row',
  },
  /** Profile */
  profile: {
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 1000,
    marginRight: 12,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#3d3d3d',
  },
  profileHandle: {
    marginTop: 4,
    fontSize: 15,
    color: '#989898',
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: Spacing * 2,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  /** Tab */
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  tabWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    marginLeft: 5,
  },
  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    paddingLeft: 24,
    paddingRight: 24,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#2c2c2c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#7f7f7f',
    marginRight: 4,
  },
});