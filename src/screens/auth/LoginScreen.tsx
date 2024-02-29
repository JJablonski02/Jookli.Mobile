import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  Dimensions,
  Platform,
} from "react-native";
import React, { useContext, useState } from "react";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import AppTextInput from "../../components/AppTextInput";
import { AuthContext } from "../../context/AuthContext";
import SmallCornerButton from "../../components/SmallCornerButton";
import { RegularButtonBig, RegularLabelButton } from "../../components/RegularButton";
import { SafeView } from "../../components/global/SafeView";
import KeyBoardAwareScrollViewOnVisible from "../../components/KeyboardScrollView";
import GoogleButton from "../../components/GoogleButton";
import AppleButton from "../../components/AppleButton.android";
import MicrosoftButton from "../../components/MicrosoftButton.android";
import { NotifyError } from "../../components/notifications/Notify";
import { ValidateLoginScreen } from "../../common/FieldValidatorProvider";
import * as Device from 'expo-device';
import NetInfo from "@react-native-community/netinfo";
type Props = NativeStackScreenProps<RootStackParamList, "Login">;
interface ILoginScreenProps {
  username: string;
  password: string;
};

const { height } = Dimensions.get("window");

const LoginScreen: React.FC<Props> = ({ navigation: { navigate }}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(AuthContext);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isFieldEdited, setFieldEdited] = useState(false);
  const [loginProps, setLoginProps] = useState<ILoginScreenProps>({ username: "", password: "" });

  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
      setEmail(email);
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }
  const validate = () => {
    validateEmail(email);
  };

  const onChangeTextHandler = (text: string) => {
    setFieldEdited(true);
    setEmail(text);
  };

  const signIns = () => {};

  return (
    <KeyBoardAwareScrollViewOnVisible>
      <SafeView>
        <View style={styles.mostTopContainer}>
          <SmallCornerButton navigation={() => navigate("Register")} label="Register"/>
        </View>
        <View>
          <ImageBackground
            style={styles.image}
            resizeMode="contain"
            source={require("../../../assets/images/JoyProfits_Register.png")}
          />
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={styles.headerBigLabel}>
            Welcome back you've been missed!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
            alignItems: "center",
            paddingBottom: Spacing * 3,
            borderBottomColor: Colors.gray,
            borderBottomWidth: 1,
            flex: 1,
          }}
        >
          <AppTextInput
          placeholder="Email"
          onChangeText={(username: string) => setLoginProps({...loginProps, username})}/>
          
          <AppTextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password: string) => setLoginProps({...loginProps, password})}
          />

          <RegularLabelButton onPress={() => (navigate('RecoverPassword'))} label="Forgot your password ?"/>

          <RegularButtonBig
            label="Sign in"
            onPress={() => {
              const message = ValidateLoginScreen(loginProps);
              if (!message) 
              {
                context?.login(email, password);
              } else {
                NotifyError("Sign in error occured", message);
              }
            }}
          />
        </View>
        <View
          style={{ width: "100%", gap: 4, flex: 1, justifyContent: "flex-end" }}
        >
          <GoogleButton signIn={signIns} />
          <AppleButton signIn={signIns} />
          <MicrosoftButton signIn={signIns} />
        </View>
      </SafeView>
    </KeyBoardAwareScrollViewOnVisible>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mostTopContainer: {
    marginTop: Spacing * 2,
    marginBottom: Spacing * 2,
    flex: 1,
  },
  image: {
    height: height / 5,
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: Spacing * 3,
  },
  headerBigLabel: {
    fontSize: FontSize.large,
    fontFamily: "PoppinsBold",
    textAlign: "center",
  },
  headerSmallLabel: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: "PoppinsRegular",
    textAlign: "center",
    marginTop: Spacing * 2,
  },
  twoButtonsContainer: {
    paddingTop: Spacing,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
  },
});
