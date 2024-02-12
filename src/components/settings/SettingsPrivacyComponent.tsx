import React, { useEffect, useState } from "react";
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
import { NotifierRoot } from "react-native-notifier";
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
  TaskCompleted: boolean;
  TransferConfirmation: boolean;
  NewRegistration: boolean;
  MoneyFromReferral: boolean;
  OccasionalEvents: boolean;
};

interface ReceivingMessagesProps{
  PersonalizedHelp: boolean;
  PeriodicNewsletters: boolean;
  OccasionalSurveys: boolean;
  SpecialOffers: boolean;
};

const SettingsPrivacyComponent: React.FC = () => {
  
  const [contactProps , setContactProps] = React.useState<ContactProps>({
    FirstName: '',
    LastName: '',
    AreaCode: '',
    PhoneNumber: '',
  });
  
  const [notificationProps, setNotificationProps] = React.useState<NotificationProps>({
    TaskCompleted: false,
    TransferConfirmation: false,
    NewRegistration: false,
    MoneyFromReferral: false,
    OccasionalEvents: false,
  });

  const [receivingMessagesProps, setReceivingMessagesProps] = React.useState<ReceivingMessagesProps>({
    PersonalizedHelp: false,
    PeriodicNewsletters: false,
    OccasionalSurveys: false,
    SpecialOffers: false,
  });

  const [data, setData] = useState<CountryData[]>([]);

  useEffect(() => {
    const data  = fetchData();
    setData(data);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact data</Text>
      <SettingsTextInput placeholder="First Name" onChangeText={(text: string) => setContactProps({...contactProps, FirstName: text})}/>
      <SettingsTextInput placeholder="Last Name" onChangeText={(text: string) => setContactProps({...contactProps, LastName: text})}/>
      <SettingsDropdown placeholder="Select area code..." label="Area code" dataSource={data} selectedValue={(text: string) => setContactProps({...contactProps, AreaCode: text})}/>
      <SettingsTextInput placeholder="Phone number" maxLength={15} onChangeText={(text: string) => setContactProps({...contactProps, PhoneNumber: text})} />
      <SettingsButtonSave onPress={() => ValidatePrivacyContactComponent(contactProps)}/>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.title}>
          Receiving notifications from the application                   
        </Text>
        <SettingsSwitchComponent label="When the task is completed" isSwitchEnabled={(isEnabled: boolean) => {{setNotificationProps({...notificationProps, TaskCompleted: isEnabled})}}}/>
        <SettingsSwitchComponent label="Confirmation that we have sent the transfer to your payment method" isSwitchEnabled={(isEnabled: boolean) => setNotificationProps({...notificationProps, TransferConfirmation: isEnabled})}/>
        <SettingsSwitchComponent label="New registration from your referral link" isSwitchEnabled={(isEnabled: boolean) => setNotificationProps({...notificationProps, NewRegistration: isEnabled})}/>
        <SettingsSwitchComponent label="When you made money from your referral link" isSwitchEnabled={(isEnabled: boolean) => setNotificationProps({...notificationProps, MoneyFromReferral: isEnabled})}/>
        <SettingsSwitchComponent label="Occasional events and bonuses" isSwitchEnabled={(isEnabled: boolean) => setNotificationProps({...notificationProps, MoneyFromReferral: isEnabled})}/>
        <SettingsButtonSave onPress={() => ValidatePrivacyNotificationsComponent(notificationProps)}/>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={styles.title}>Receiving messages</Text>
        <SettingsSwitchComponent label="Personalized help and performance suggestions" isSwitchEnabled={(isEnabled: boolean) => setReceivingMessagesProps({...receivingMessagesProps, PersonalizedHelp: isEnabled})}/>
        <SettingsSwitchComponent label="Periodic newsletters with tips and best practices" isSwitchEnabled={(isEnabled: boolean) => setReceivingMessagesProps({...receivingMessagesProps, PeriodicNewsletters: isEnabled})}/>
        <SettingsSwitchComponent label="Occasional surveys to help JoyProfits improve the app" isSwitchEnabled={(isEnabled: boolean) => setReceivingMessagesProps({...receivingMessagesProps, OccasionalSurveys: isEnabled})}/>
        <SettingsSwitchComponent label="special offers - promotions, discount codes" isSwitchEnabled={(isEnabled: boolean) => setReceivingMessagesProps({...receivingMessagesProps, SpecialOffers: isEnabled})}/>
        <SettingsButtonSave onPress={() => ValidatePrivacyMessagesComponent(receivingMessagesProps)}/>
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
