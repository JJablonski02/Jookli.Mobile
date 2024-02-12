import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SettingsPaymentDetails from "./nestedComponents/SettingsPaymentDetails";
import Spacing from "../../constants/Spacing";
import { TextInput } from "react-native-paper";
import SettingsDropdown from "./nestedComponents/SettingsDropdown";
import SettingsButtonSave from "./nestedComponents/SettingsButtonSave";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import SettingsTextInput from "./nestedComponents/SettingsTextInput";
import CountryPhoneCodes from "../../../locales/options/countryPhoneCodes.json";
import CommonCurrencies from "../../../locales/options/commonCurrencies.json";
import { ValidatePaymentsComponent } from "../../common/FieldValidatorProvider";

interface CommonData {
  label: string;
  value: string;
};
interface paymentDetails {
  FirstName: string;
  LastName: string;
  Street: string;
  HouseNumber: string;
  ZipCode: string;
  City: string;
  StateRegion: string;
  Currency: string;
  Country: string;
}

//Fetching data from json file
const fetchCountryData = () => {
  const data: CommonData[] = CountryPhoneCodes.map((item: any) => {
    return {
      label: item.country,
      value: item.country,
    }
  });
  return data;
};

const fetchCurrencyData = () => {
  const currencyNames: CommonData[] = Object.values(CommonCurrencies).map((item: any) => {
    return{
      label: item.name,
      value: item.name,
    }
  });
  return currencyNames;
};
  


const SettingsPaymentsComponent: React.FC = () => {
const [countryData, setCountryData] = React.useState<CommonData[]>([]);
const [currencyData, setCurrencyData] = React.useState<CommonData[]>([]);

  useEffect(() => {
    const data = fetchCountryData();
    setCountryData(data);
    const currency = fetchCurrencyData();
    setCurrencyData(currency);
  }, []);

  const [paymentDetails, setPaymentDetails] = React.useState<paymentDetails>({
    FirstName: "",
    LastName: "",
    Street: "",
    HouseNumber: "",
    ZipCode: "",
    City: "",
    StateRegion: "",
    Currency: "",
    Country: "",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment receiver</Text>
      <Text style={styles.description}>
        Add your billing details to receive payments
      </Text>
      <SettingsTextInput
      placeholder="First Name"
      maxLength={50}
      onChangeText={(text: string) => setPaymentDetails({...paymentDetails, FirstName: text})}/>
      <SettingsTextInput
      placeholder="Last Name"
      maxLength={50}
      onChangeText={(text: string) => setPaymentDetails({...paymentDetails, LastName: text})}/>
      <SettingsTextInput
      placeholder="Street"
      maxLength={50}
      onChangeText={(text: string) => setPaymentDetails({...paymentDetails, Street: text})}/>
      <SettingsTextInput
      placeholder="House number"
      maxLength={50}
      onChangeText={(text: string) => setPaymentDetails({...paymentDetails, HouseNumber: text})}/>
      <SettingsTextInput
      placeholder="Zip Code"
      maxLength={16}
      onChangeText={(text: string) => setPaymentDetails({...paymentDetails, ZipCode: text})}/>
      <SettingsTextInput
      placeholder="City"
      maxLength={50}
      onChangeText={(text: string) => setPaymentDetails({...paymentDetails, City: text})}/>
      <SettingsTextInput
      placeholder="State or region"
      maxLength={50}
      onChangeText={(text: string) => setPaymentDetails({...paymentDetails, StateRegion: text})}/>
      <SettingsDropdown placeholder="Select country" label="Country" dataSource={countryData}/>
      <SettingsDropdown placeholder="Select currency" label="Currency" dataSource={currencyData}/>
      <SettingsButtonSave onPress={() => ValidatePaymentsComponent(paymentDetails)} />
    </View>
  );
};

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
  switch: {
    marginTop: Spacing,
    alignSelf: "center",
  },
  style: {
    marginTop: Spacing * 2,
  },
});

export default SettingsPaymentsComponent;
