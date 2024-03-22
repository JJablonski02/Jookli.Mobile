import React, { useEffect } from "react";
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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AccountStatus } from "../../core/enums/UserTypes";
import { Loader } from "../global/Loader";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setLoading } from "../../redux/store/store";
import * as SecureStore from 'expo-secure-store';

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

interface PreferencesDTO{
  accountStatus: AccountStatus;
  displayFormat: string;
  language: string;
  timeZone: string;

}



const SettingsPreferencesComponent: React.FC = () => {
  const [Email, setEmail] = React.useState<string>("");
  const [preferences, setPreferences] = React.useState<PreferencesDTO>();
  const [showVerifyEmail, setShowVerifyEmail] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const {isLoading} = useSelector((state : RootState) => state.appState);
  const [refreshing, setRefreshing] = React.useState(false);
const [userInfo, setUserInfo] = React.useState<string>();
  useEffect(() => {
    const getData = async () => { 
      const user = await AsyncStorage.getItem('useInfo');
      setUserInfo(user || '');
    };

    const fetchData = async () => {
      try{
      dispatch(setLoading(true));
      const token = await SecureStore.getItemAsync('accessToken')

       const response = await axios.get<PreferencesDTO>('/api/userSettings/preferences', {
          headers:{
            Authorization: `Bearer ${token}`,
          }
        });
        setPreferences(response.data);

        if(response.data.accountStatus !== AccountStatus.Confirmed){
          setShowVerifyEmail(true);
        }
        dispatch(setLoading(false));

      }catch(ex){
        console.log(ex);
        dispatch(setLoading(false));

      }
    }
    getData();
    fetchData();
  }, []);

  return (
    <SettingsSafeView>
      <View style={styles.container}>
        {!userInfo && <SettingsVerifyEmail />}
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
      {(userInfo) ?  
            <Loader/>
             : null}
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
