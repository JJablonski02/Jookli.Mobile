import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import AppTextInput from "../../components/AppTextInput";
import { SafeView } from "../../components/global/SafeView";
import { RegularButtonBig } from "../../components/RegularButton";
import ArrowBack from "../../components/ArrowBack";
import { ValidateRecoverEmailAddress } from "../../common/FieldValidatorProvider";
import { NotifyError, NotifySuccess } from "../../components/notifications/Notify";
import { postRecoverPassword } from "../../api/endpoints/api-useraccess-service";
import KeyBoardAwareScrollViewOnVisible from "../../components/KeyboardScrollView";
import { HttpStatusCode } from "axios";

type Props = NativeStackScreenProps<RootStackParamList, "RecoverPassword">;
const height = Dimensions.get('window').height;

const RecoverPasswordScreen: React.FC<Props> = ({
  navigation: { navigate },
}) => {
  const [emailAddress, setEmailAddress] = React.useState({
    email: "",
  });

  const handleOnPressSend = async () => {
    let message = ValidateRecoverEmailAddress(emailAddress.email)
    if (!message){
      let response = await postRecoverPassword(emailAddress.email);
      console.log(emailAddress.email)
      if (response.status === HttpStatusCode.Ok){
        NotifySuccess('Operation Succeeded', 'Please check your e-mail for further instructions')
      }
    }else{
      NotifyError('Operation failed', message)
    }
  };

  return (
    <KeyBoardAwareScrollViewOnVisible>
    <SafeView>
      <View style={styles.headerFooterContainer}>
            <ArrowBack/>
        </View>
      <View style={styles.viewContainer}>
        <Text style={styles.titleContainer}>Having trouble logging in ?</Text>
        <Text style={styles.descriptionContainer}>Provide additional information to help with the account recovery process.</Text>
        <View style={styles.textInputContainer}>
          <AppTextInput
            placeholder="Enter your e-mail address"
            onChangeText={(text) => setEmailAddress({...emailAddress, email: text})}
          />
          <RegularButtonBig label="Send" onPress={() => handleOnPressSend()} />
        </View>
      </View>
      <View style={styles.headerFooterContainer}/>
    </SafeView>
    </KeyBoardAwareScrollViewOnVisible>
  );
};

export default RecoverPasswordScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleContainer: {
    fontSize: FontSize.xLarge,
            color: Colors.primary,
            fontFamily: "PoppinsRegular",
            textAlign: "center",
            marginVertical: Spacing * 3,
  },
  descriptionContainer: {
    fontFamily: "PoppinsSemiBold",
            fontSize: FontSize.small,
            textAlign: "center",
            color: Colors.darkText,
  },
  textInputContainer:{
    marginTop: 30,
            gap: Spacing * 2,
  },
  headerFooterContainer:{
    height: height/14,
    justifyContent: 'flex-end',
  }
});
