import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import SettingsVerifyEmail from "./nestedComponents/SettingsVerifyEmail";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import SettingsDropdown from "./nestedComponents/SettingsDropdown";
import SettingsDisplayProfitOne, { DisplayProfitFormatType } from "./nestedComponents/SettingsDisplayProfit";
import SettingsDarkMode from "./nestedComponents/SettingsDarkMode";
import SettingsAccountIdentifier from "./nestedComponents/SettingsAccountIdentifier";
import SettingsTextInput from "./nestedComponents/SettingsTextInput";
import SettingsButtonSave from "./nestedComponents/SettingsButtonSave";
import { moderateScale } from "../../constants/FontSize";
import TextV from "../global/Text";
import { SettingsSafeView } from "./nestedComponents/SettingsSafeView";
import Languages from "../../../locales/options/languages.json";
import TimeZones from "../../../locales/options/timezones.json";
import { AccountStatus } from "../../core/enums/UserTypes";
import { Loader } from "../global/Loader";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setLoading } from "../../redux/store/store";
import { getPreferences, postChangeEmail, postDisplayProfitAs, postLanguageAndTimeZone } from "../../api/endpoints/api-usersettings-service";
import * as SecureStore from 'expo-secure-store';
import { HttpStatusCode } from "axios";
import { ValidateChangeEmailAddress } from "../../common/FieldValidatorProvider";
import { NotifyError } from "../notifications/Notify";

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

interface PreferencesResponse{
  accountStatus: AccountStatus;
  displayFormat: number;
  language: string;
  timeZone: string;
}

interface DisplayFormatDTO{
  displayFormat: DisplayProfitFormatType;
}

interface LanguageAndTimeZoneDTO{
  language: string;
  timeZone: string;
}

interface EmailDTO{
  email: string;
}


const SettingsPreferencesComponent: React.FC = () => {
  const [email, setEmail] = React.useState<EmailDTO>({email: ""});
  const [preferences, setPreferences] = React.useState<PreferencesResponse>();
  const [showVerifyEmail, setShowVerifyEmail] = React.useState<boolean>(false);
  const [displayFormat, setDisplayFormat] = React.useState<DisplayFormatDTO>();
  const [languageAndTimeZone, setLanguageAndTimeZone] = React.useState<LanguageAndTimeZoneDTO>({
    language: "",
    timeZone: "",
  })
  const [accountStatus, setAccountStatus] = React.useState<AccountStatus>();
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state : RootState) => state.appState);

  useEffect(() => {
    const getAccountDetails = async () => {

      const email = await SecureStore.getItemAsync("email");
      const accountStatus = await SecureStore.getItemAsync('accountStatus');
      if(email){
        setEmail({email: email});
      }
      
      if(accountStatus){
        var accountStatusNumber = parseInt(accountStatus);
        setAccountStatus(accountStatusNumber);
        if(accountStatusNumber !== AccountStatus.Confirmed){
          setShowVerifyEmail(true);
        }else{
          setShowVerifyEmail(false);
        }
      }
    };

    const fetchData = async () => {

        const response = await getPreferences();
         setPreferences(response);
    }

    

    const fetchDataAndAccountDetails = async () => {
      await dispatch(setLoading(true));

      //Get account details from secure store
      await getAccountDetails();

      //Get account details from server
      await fetchData();

      await dispatch(setLoading(false));
    }
    
    fetchDataAndAccountDetails();
  }, []);

  //If server response is not the same as the current account status, update the account status in the secure store.
  useEffect(() => {
    const updateAccountStatus = async () => {
    if(preferences){
      if(preferences.accountStatus !== accountStatus){
        await SecureStore.setItemAsync('accountStatus', preferences.accountStatus.toString());
      }
    }
  }

  updateAccountStatus();

  }, [preferences])



  const handleOnPressDisplayProfit = async () => {
     await postDisplayProfitAs(displayFormat);
  };

  const handleOnPressLanguageAndTimeZone = async () => {
    await postLanguageAndTimeZone(languageAndTimeZone);    
  };

  const handleOnPressChangeEmailAddress = async () => {
    var message = ValidateChangeEmailAddress(email.email);
    if(!message){
      var response = await postChangeEmail(email);
      if(response === HttpStatusCode.Ok){
        SecureStore.setItemAsync("email", email.email);
      }
    }else{
      NotifyError('Operation failed', message)
    }
  }

  return (
    <SettingsSafeView>
      <View style={styles.container}>
        {showVerifyEmail && <SettingsVerifyEmail />}
        <View>
          <TextV style={styles.title}>Change email address</TextV>
          <SettingsTextInput placeholder="Email" onChangeText={(text: string) => setEmail({...email, email: text})} defaultText={email.email}/>
          <SettingsButtonSave onPress={() => handleOnPressChangeEmailAddress()} />
        </View>
        <View>
          <TextV style={styles.title}>Language and time zone</TextV>
          <SettingsDropdown
            label="Language"
            placeholder="Select language..."
            dataSource={fetchLanguageData()}
            selectedValue={(text : string) => setLanguageAndTimeZone({...languageAndTimeZone, language: text})}
            defaultValue={preferences?.language}
          />
          <SettingsDropdown
            label="Time zone"
            placeholder="Select time zone..."
            dataSource={fetchTimezoneData()}
            selectedValue={(text : string) => setLanguageAndTimeZone({...languageAndTimeZone, timeZone: text})}
            defaultValue={preferences?.timeZone}
          />
          <SettingsButtonSave onPress={() => handleOnPressLanguageAndTimeZone()} />
        </View>
        <View>
          <TextV style={styles.title}>Display profit as</TextV>
          <SettingsDisplayProfitOne value={(selectedType : any) => setDisplayFormat({...displayFormat, displayFormat: selectedType})} defaultValue={preferences?.displayFormat}/>
          <SettingsButtonSave onPress={() => handleOnPressDisplayProfit()} />
        </View>
        <View>
          <TextV style={styles.title}>Dark mode</TextV>
          <SettingsDarkMode />
        </View>
        <View>
          <TextV style={styles.title}>Account Identifier</TextV>
          <SettingsAccountIdentifier accountIdentifier={"1000-635-435"} />
        </View>
      </View>
      {isLoading ?  
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
