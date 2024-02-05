import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SettingsPaymentDetails from "./nestedComponents/SettingsPaymentDetails";
import Spacing from "../../constants/Spacing";
import { TextInput } from "react-native-paper";
import SettingsTextInput, {
  Variant,
} from "./nestedComponents/SettingsTextInput";
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

const SettingsPaymentsComponent: React.FC = () => {
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

  const onFirstNameHandle = (text: string) => {
    setPaymentDetails({ ...paymentDetails, FirstName: text });
  };

  const onLastNameHandle = (text: string) => {
    setPaymentDetails({ ...paymentDetails, LastName: text });
  };
  const onStreetHandle = (text: string) => {
    setPaymentDetails({ ...paymentDetails, Street: text });
  };
  const onHouseNumberHandle = (text: string) => {
    setPaymentDetails({ ...paymentDetails, HouseNumber: text });
  };
  const onZipCodeHandle = (text: string) => {
    setPaymentDetails({ ...paymentDetails, ZipCode: text });
  };
  const onCityHandle = (text: string) => {
    setPaymentDetails({ ...paymentDetails, City: text });
  };
  const onStateRegionHandle = (text: string) => {
    setPaymentDetails({ ...paymentDetails, StateRegion: text });
  };

  const isFirstNameValid = () => {
    const firstName = paymentDetails.FirstName;

    if (firstName.length === 0) {
      return false;
    }
    const onlyLetters = /^[A-Za-z]+$/;
    return onlyLetters.test(firstName);
  };

  const isLastNameValid = () => {
    const lastName = paymentDetails.LastName;

    if (lastName.length === 0) {
      return false;
    }
    const onlyLetters = /^[A-Za-z]+$/;
    return onlyLetters.test(lastName);
  };

  const isStreetValid = () => {
    const street = paymentDetails.Street;

    if (street.length === 0) {
      return false;
    }
    const onlyLetters = /^[A-Za-z]+$/;
    return onlyLetters.test(street);
  };

  const isHouseNumberValid = () => {
    const houseNumber = paymentDetails.HouseNumber;

    if (houseNumber.length === 0) {
      return false;
    }
    const onlyLetters = /^[0-9A-Za-z/]+$/;
    return onlyLetters.test(houseNumber);
  };

  const isZipCodeValid = () => {
    const zipCode = paymentDetails.ZipCode;

    if (zipCode.length === 0) {
      return false;
    }
    const onlyLetters = /^[0-9-]+$/;
    return onlyLetters.test(zipCode);
  };

  const isCityValid = () => {
    const city = paymentDetails.City;

    if (city.length === 0) {
      return false;
    }
    const onlyLetters = /^[A-Za-z]+$/;
    return onlyLetters.test(city);
  };

  const isStateRegionValid = () => {
    const stateRegion = paymentDetails.StateRegion;

    if (stateRegion.length === 0) {
      return false;
    }
    const onlyLetters = /^[A-Za-z]+$/;
    return onlyLetters.test(stateRegion);
  };

  const ValidateHandlers = (): string | null => {
    switch (true) {
      case !isFirstNameValid():
        return "First name is not valid";
      case !isLastNameValid():
        return "Last name is not valid";
      case !isStreetValid():
        return "Street is not valid";
      case !isHouseNumberValid():
        return "House number is not valid";
      case !isZipCodeValid():
        return "Zip code is not valid";
      case !isCityValid():
        return "City is not valid";
      case !isStateRegionValid():
        return "State or region is not valid";
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment receiver</Text>
      <Text style={styles.description}>
        Add your billing details to receive payments
      </Text>
      <SettingsTextInput
        placeholder="First Name"
        variant={Variant.FirstName}
        required={true}
        maxLength={50}
        onTextChange={onFirstNameHandle}
      />
      <SettingsTextInput
        placeholder="Last Name"
        variant={Variant.LastName}
        required={true}
        maxLength={50}
        onTextChange={onLastNameHandle}
      />
      <SettingsTextInput
        placeholder="Street"
        variant={Variant.Street}
        required={true}
        maxLength={50}
        onTextChange={onStreetHandle}
      />
      <SettingsTextInput
        placeholder="House Number"
        variant={Variant.HouseNumber}
        required={true}
        maxLength={10}
        onTextChange={onHouseNumberHandle}
      />
      <SettingsTextInput
        placeholder="Zip code"
        variant={Variant.ZipCode}
        required={true}
        maxLength={16}
        onTextChange={onZipCodeHandle}
      />
      <SettingsTextInput
        placeholder="City"
        variant={Variant.City}
        required={true}
        maxLength={50}
        onTextChange={onCityHandle}
      />
      <SettingsTextInput
        placeholder="State or region"
        variant={Variant.StateRegion}
        required={true}
        maxLength={50}
        onTextChange={onStateRegionHandle}
      />
      <SettingsDropdown />
      <SettingsDropdown />
      <SettingsButtonSave onPress={() => ValidateHandlers()} />
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
