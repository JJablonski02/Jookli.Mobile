import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SettingsPaymentDetails from "./nestedComponents/SettingsPaymentDetails";
import Spacing from "../../constants/Spacing";
import { TextInput } from "react-native-paper";
import SettingsTextInput, {Variant} from "./nestedComponents/SettingsTextInput";
import SettingsDropdown from "./nestedComponents/SettingsDropdown";
import SettingsButtonSave from "./nestedComponents/SettingsButtonSave";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";

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

//Handlers


const onLastNameHandle = (text: string) => {

};
const onStreetHandle = (text: string) => {

};
const onHouseNumberHandle = (text: string) => {
  
  };
  const onZipCodeHandle = (text: string) => {
    
  };

const SettingsPaymentsComponent: React.FC = () => {

  const [paymentDetails, setPaymentDetails] = React.useState<paymentDetails>({
    FirstName: '',
    LastName: '',
    Street: '',
    HouseNumber: '',
    ZipCode: '',
    City: '',
    StateRegion: '',
    Currency: '',
    Country: '',
  });

  const onFirstNameHandle = (text: string) => {
    setPaymentDetails({...paymentDetails, FirstName: text});
  };
  const isFirstNameValid = () => {
    const firstName = paymentDetails.FirstName;

    if(firstName.length === 0){
      return false;
    }
    const onlyLetters = /^[A-Za-z]+$/;
    return onlyLetters.test(firstName);
  };
  const ValidateHandlers = (): string | null => {
    if(!isFirstNameValid()){
      return "First name is not valid";
    };
    return null;
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment receiver</Text>
      <Text style={styles.description}>Add your billing details to receive payments</Text>
        <SettingsTextInput 
        placeholder="First Name" 
        variant={Variant.FirstName} 
        required={true} 
        maxLength={50}
        onTextChange={onFirstNameHandle}/>
        <SettingsTextInput 
        placeholder="Last Name" 
        variant={Variant.LastName}
        required={true} 
        maxLength={50}
        onTextChange={onLastNameHandle}/>
        <SettingsTextInput 
        placeholder="Street" 
        variant={Variant.Street}
        required={true} 
        maxLength={50}
        onTextChange={onStreetHandle}/>
        <SettingsTextInput 
        placeholder="House Number"
        variant={Variant.HouseNumber}
         required={true} 
         maxLength={50}
         onTextChange={onHouseNumberHandle}/>
        <SettingsTextInput 
        placeholder="Zip code"
        variant={Variant.ZipCode}
         required={true} 
         maxLength={16}
         onTextChange={onZipCodeHandle}/>
        <SettingsTextInput 
        placeholder="City" 
        variant={Variant.City}
        required={true} 
        maxLength={50}
        onTextChange={onZipCodeHandle}/>
        <SettingsTextInput
         placeholder="State or region" 
         variant={Variant.StateRegion}
         required={true} 
         maxLength={50}
         onTextChange={onZipCodeHandle}/>
        <SettingsDropdown/>
        <SettingsDropdown/>
        <SettingsButtonSave onPress={() => ValidateHandlers()}/>
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
  style:{
    marginTop: Spacing * 2,
},
});

export default SettingsPaymentsComponent;
