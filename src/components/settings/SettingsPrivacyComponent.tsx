import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Settings,
} from "react-native";
import SettingsVerifyEmail from "./nestedComponents/SettingsVerifyEmail";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import FontSize, { moderateScale } from "../../constants/FontSize";
import SettingsDropdown from "./nestedComponents/SettingsDropdown";
import SettingsButtonSave from "./nestedComponents/SettingsButtonSave";
import SettingsSwitchComponent from "./nestedComponents/SettingsSwitchComponent";
import SettingsTextInput from "./nestedComponents/SettingsTextInput";
import CountryPhoneCodes from "../../../locales/options/countryPhoneCodes.json";
import {
  ValidatePrivacyContactComponent, 
  ValidatePrivacyMessagesComponent, 
  ValidatePrivacyNotificationsComponent
} from "../../common/FieldValidatorProvider";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import TextV from "../global/Text";
import { SettingsSafeView } from "./nestedComponents/SettingsSafeView";
import { NotifyError, NotifySuccess } from "../notifications/Notify";
import { getPrivacySettings, postContactDataSettings, postNotificationsSettings, postReceivingMessagesSettings } from "../../api/endpoints/apu-usersettings-service";
import { Loader } from "../global/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/store/store";


interface CountryData{
  label: string;
  value: string;
}

const fetchData = () => {
  const data: CountryData[] = CountryPhoneCodes.map((item: any) => {
    return {
      label: item.country + " " + item.iso + " ( +" + item.code + " )",
      value: item.iso,
    };
  });
  return data;
}

interface ContactProps {
  FirstName: string;
  LastName: string;
  AreaCode: string;
  PhoneNumber: string;
};

interface NotificationProps{
  taskCompleted: boolean;
  transferConfirmation: boolean;
  referralRegistration: boolean;
  referralMoneyMade: boolean;
  occasionalEvents: boolean;
};

interface ReceivingMessagesProps{
  personalizedHelp: boolean;
  periodicNewsletters: boolean;
  occasionalSurveys: boolean;
  specialOffers: boolean;
};

interface PrivacyResponse{
  firstName: string;
  lastName: string;
  areaCode: string;
  phoneNumber: string;
  taskCompleted: boolean;
  transferConfirmation: boolean;
  referralRegistration: boolean;
  referralMoneyMade: boolean;
  occasionalEvents: boolean;
  personalizedHelp: boolean;
  periodicNewsletters: boolean;
  occasionalSurveys: boolean;
  specialOffers: boolean;
}

const SettingsPrivacyComponent: React.FC = () => {

  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: any) => state.appState);
  
  const [privacyResponse, setPrivacyResponse] = React.useState<PrivacyResponse>({
    firstName: '',
    lastName: '',
    areaCode: '',
    phoneNumber: '',
    taskCompleted: false,
    transferConfirmation: false,
    referralRegistration: false,
    referralMoneyMade: false,
    occasionalEvents: false,
    personalizedHelp: false,
    periodicNewsletters: false,
    occasionalSurveys: false,
    specialOffers: false,
  });

  const [contactProps , setContactProps] = React.useState<ContactProps>({
    FirstName: '',
    LastName: '',
    AreaCode: '',
    PhoneNumber: '',
  });
  
  const [notificationProps, setNotificationProps] = React.useState<NotificationProps>({
    taskCompleted: false,
    transferConfirmation: false,
    referralRegistration: false,
    referralMoneyMade: false,
    occasionalEvents: false,
  });

  const [receivingMessagesProps, setReceivingMessagesProps] = React.useState<ReceivingMessagesProps>({
    personalizedHelp: false,
    periodicNewsletters: false,
    occasionalSurveys: false,
    specialOffers: false,
  });

  const [data, setData] = useState<CountryData[]>([]);

  useEffect(() => {
    const data  = fetchData();
    setData(data);
  }, []);

  const handleOnPressContactData = async () => {
    var message = ValidatePrivacyContactComponent(contactProps);

    if(!message){
      await postContactDataSettings(contactProps);
      NotifySuccess('Operation succeeded', 'Privacy settings saved successfully');
    }else{
      NotifyError('Operation failed', message);
    }
  };

  const handleOnPressReceivingNotifications = async () => {
    var message = ValidatePrivacyNotificationsComponent(notificationProps);
    if(!message){ 
      await postNotificationsSettings(notificationProps);
      NotifySuccess('Operation succeeded', 'Privacy settings saved successfully');
    }else{
      NotifyError('Operation failed', message);
    }
  };

  const handleOnPressReceivingMessages = async () => {
    var message = ValidatePrivacyMessagesComponent(receivingMessagesProps);

    if(!message){
      await postReceivingMessagesSettings(receivingMessagesProps);
      NotifySuccess('Operation succeeded', 'Privacy settings saved successfully');
    }else{
      NotifyError('Operation failed', message)
    }
  };

  //TODO Przekminić w jaki sposób pobierając dane z api przypisać je do komponentu, a następnie podczas następnego save bez zmiany zostały wysłane takie jaki jest stan komponentu
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      const response = await getPrivacySettings();
     setPrivacyResponse(response);
     setNotificationProps(response);
     setReceivingMessagesProps(response); 
     dispatch(setLoading(false));
    };

    fetchData();
  }, []);

  return (
    <SettingsSafeView>
      <View style={styles.sectionContainer}>
      <View style={{gap:Spacing}}>
      <TextV style={styles.title}>Contact data</TextV>
      <SettingsTextInput placeholder="First Name" onChangeText={(text: string) => setContactProps({...contactProps, FirstName: text})} defaultText={privacyResponse.firstName}/>
      <SettingsTextInput placeholder="Last Name" onChangeText={(text: string) => setContactProps({...contactProps, LastName: text})} defaultText={privacyResponse.lastName}/>
      <SettingsDropdown placeholder="Select area code..." label="Area code" dataSource={data} selectedValue={(text: string) => setContactProps({...contactProps, AreaCode: text})} defaultValue={privacyResponse.areaCode}/>
      <SettingsTextInput placeholder="Phone number" maxLength={15} onChangeText={(text: string) => setContactProps({...contactProps, PhoneNumber: text})} keyboardType="number-pad" defaultText={privacyResponse.phoneNumber}/>
      <SettingsButtonSave onPress={() => handleOnPressContactData()}/>
      </View>
      <View style={{gap: Spacing}}>
        <TextV style={styles.title}>
          Receiving notifications from the application                   
        </TextV>
        <SettingsSwitchComponent label="When the task is completed" isSwitchEnabled={(isEnabled: boolean) => {{setNotificationProps({...notificationProps, taskCompleted: isEnabled})}}} defaultValue={privacyResponse.taskCompleted}/>
        <SettingsSwitchComponent label="Confirmation that we have sent the transfer to your payment method" isSwitchEnabled={(isEnabled: boolean) => setNotificationProps({...notificationProps, transferConfirmation: isEnabled})} defaultValue={privacyResponse.transferConfirmation}/>
        <SettingsSwitchComponent label="New registration from your referral link" isSwitchEnabled={(isEnabled: boolean) => setNotificationProps({...notificationProps, referralRegistration: isEnabled})} defaultValue={privacyResponse.referralRegistration}/>
        <SettingsSwitchComponent label="When you made money from your referral link" isSwitchEnabled={(isEnabled: boolean) => setNotificationProps({...notificationProps, referralMoneyMade: isEnabled})} defaultValue={privacyResponse.referralMoneyMade}/>
        <SettingsSwitchComponent label="Occasional events and bonuses" isSwitchEnabled={(isEnabled: boolean) => setNotificationProps({...notificationProps, occasionalEvents: isEnabled})} defaultValue={privacyResponse.occasionalEvents}/>
        <SettingsButtonSave onPress={() => handleOnPressReceivingNotifications()}/>
      </View>
      <View style={{marginTop: 20}}>
        <TextV style={styles.title}>Receiving messages</TextV>
        <SettingsSwitchComponent label="Personalized help and performance suggestions" isSwitchEnabled={(isEnabled: boolean) => setReceivingMessagesProps({...receivingMessagesProps, personalizedHelp: isEnabled})} defaultValue={privacyResponse.personalizedHelp}/>
        <SettingsSwitchComponent label="Periodic newsletters with tips and best practices" isSwitchEnabled={(isEnabled: boolean) => setReceivingMessagesProps({...receivingMessagesProps, periodicNewsletters: isEnabled})} defaultValue={privacyResponse.periodicNewsletters}/>
        <SettingsSwitchComponent label="Occasional surveys to help JoyProfits improve the app" isSwitchEnabled={(isEnabled: boolean) => setReceivingMessagesProps({...receivingMessagesProps, occasionalSurveys: isEnabled})} defaultValue={privacyResponse.occasionalSurveys}/>
        <SettingsSwitchComponent label="special offers - promotions, discount codes" isSwitchEnabled={(isEnabled: boolean) => setReceivingMessagesProps({...receivingMessagesProps, specialOffers: isEnabled})} defaultValue={privacyResponse.specialOffers}/>
        <SettingsButtonSave onPress={() => handleOnPressReceivingMessages()}/>
        </View>
        </View>
        {(isLoading) ?  
            <Loader/>
             : null}
    </SettingsSafeView>
  );
};

export default SettingsPrivacyComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing * 2,
    marginHorizontal: Spacing * 3,
    marginBottom: Spacing * 2,
    gap: Spacing * 3,
  },
  sectionContainer:{
    gap: Spacing *2,
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: 'PoppinsSemiBold',
  },
});
