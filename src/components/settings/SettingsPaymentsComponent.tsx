import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SettingsPaymentDetails from "./nestedComponents/SettingsPaymentDetails";
import Spacing from "../../constants/Spacing";
import { TextInput } from "react-native-paper";
import SettingsDropdown from "./nestedComponents/SettingsDropdown";
import SettingsButtonSave from "./nestedComponents/SettingsButtonSave";
import Colors from "../../constants/Colors";
import FontSize, { moderateScale, scale } from "../../constants/FontSize";
import SettingsTextInput from "./nestedComponents/SettingsTextInput";
import CountryPhoneCodes from "../../../locales/options/countryPhoneCodes.json";
import CommonCurrencies from "../../../locales/options/commonCurrencies.json";
import { ValidatePaymentsComponent } from "../../common/FieldValidatorProvider";
import TextV from "../global/Text";
import { SettingsSafeView } from "./nestedComponents/SettingsSafeView";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/store/store";
import { NotifyError, NotifySuccess } from "../notifications/Notify";
import { Loader } from "../global/Loader";
import * as SecureStore from 'expo-secure-store';
import { getPaymentReceiver, postPaymentReceiver } from "../../api/endpoints/api-usersettings-service";

interface CommonData {
  label: string;
  value: string;
}
interface paymentDetails {
  firstName: string;
  lastName: string;
  street: string;
  houseNumber: string;
  zipCode: string;
  city: string;
  stateOrRegion: string;
  currency: string;
  country: string;
}

//Fetching data from json file
const fetchCountryData = () => {
  const data: CommonData[] = CountryPhoneCodes.map((item: any) => {
    return {
      label: item.country,
      value: item.country,
    };
  });
  return data;
};

const fetchCurrencyData = () => {
  const currencyNames: CommonData[] = Object.values(CommonCurrencies).map(
    (item: any) => {
      return {
        label: item.name,
        value: item.name,
      };
    }
  );
  return currencyNames;
};

const SettingsPaymentsComponent: React.FC = () => {
  const [countryData, setCountryData] = React.useState<CommonData[]>([]);
  const [currencyData, setCurrencyData] = React.useState<CommonData[]>([]);
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: any) => state.appState);

  const [paymentDetails, setPaymentDetails] = React.useState<paymentDetails>({
    firstName: "",
    lastName: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    city: "",
    stateOrRegion: "",
    currency: "",
    country: "",
  });

  useEffect(() => {
    const data = fetchCountryData();
    setCountryData(data);
    const currency = fetchCurrencyData();
    setCurrencyData(currency);

    const fetchData = async () => {
      try {
        dispatch(setLoading(true));

        const response = await getPaymentReceiver();
        setPaymentDetails(response);

        dispatch(setLoading(false));  
      } catch (exception) {
        
        console.log(exception);
      }
    };

    fetchData();
  }, []);

  const handleOnPress= async () => {
    var message = ValidatePaymentsComponent(paymentDetails);
    if(!message){
      await postPaymentReceiver(paymentDetails);
      NotifySuccess("Operation succeeded", "Payment receiver details saved successfully");
    }else{
      NotifyError("Operation failed", message);
    }
  }

  return (
    <SettingsSafeView>
      <View style={styles.container}>
        <TextV style={styles.title}>Payment receiver</TextV>
        <TextV style={styles.description}>
          Add your billing details to receive payments
        </TextV>
        <SettingsTextInput
          placeholder="First Name"
          maxLength={50}
          onChangeText={(text: string) =>
            setPaymentDetails({ ...paymentDetails, firstName: text })
          }
          defaultText={paymentDetails.firstName}
        />
        <SettingsTextInput
          placeholder="Last Name"
          maxLength={50}
          onChangeText={(text: string) =>
            setPaymentDetails({ ...paymentDetails, lastName: text })
          }
          defaultText={paymentDetails.lastName}
        />
        <SettingsTextInput
          placeholder="Street"
          maxLength={50}
          onChangeText={(text: string) =>
            setPaymentDetails({ ...paymentDetails, street: text })
          }
          defaultText={paymentDetails.street}
        />
        <SettingsTextInput
          placeholder="House number"
          maxLength={50}
          onChangeText={(text: string) =>
            setPaymentDetails({ ...paymentDetails, houseNumber: text })
          }
          defaultText={paymentDetails.houseNumber}
        />
        <SettingsTextInput
          placeholder="Zip Code"
          maxLength={16}
          onChangeText={(text: string) =>
            setPaymentDetails({ ...paymentDetails, zipCode: text })
          }
          defaultText={paymentDetails.zipCode}
        />
        <SettingsTextInput
          placeholder="City"
          maxLength={50}
          onChangeText={(text: string) =>
            setPaymentDetails({ ...paymentDetails, city: text })
          }
          defaultText={paymentDetails.city}
        />
        <SettingsTextInput
          placeholder="State or region"
          maxLength={50}
          onChangeText={(text: string) =>
            setPaymentDetails({ ...paymentDetails, stateOrRegion: text })
          }
          defaultText={paymentDetails.stateOrRegion}
        />
        <SettingsDropdown
          placeholder="Select country"
          label="Country"
          dataSource={countryData}
          selectedValue={(text: string) =>setPaymentDetails({...paymentDetails, country: text})}
          defaultValue={paymentDetails.country}
        />
        <SettingsDropdown
          placeholder="Select currency"
          label="Currency"
          dataSource={currencyData}
          selectedValue={(text: string) =>setPaymentDetails({...paymentDetails, currency: text})}
          defaultValue={paymentDetails.currency}
        />
        <SettingsButtonSave
          onPress={() => handleOnPress()}
            
        />
      </View>
      {(isLoading) ?  
            <Loader/>
             : null}
    </SettingsSafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: Spacing,
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: "PoppinsSemiBold",
  },
  description: {
    fontSize: moderateScale(12),
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
