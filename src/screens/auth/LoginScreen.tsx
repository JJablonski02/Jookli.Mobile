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
import { ScrollView } from "react-native-gesture-handler";
import SmallCornerButton from "../../components/SmallCornerButton";
import { RegularButtonBig } from "../../components/RegularButton";
import { SafeView } from "../../components/SafeView";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import KeyBoardAwareScrollViewOnVisible from "../../components/KeyboardAwareScrollViewOnVisible";
import GoogleButton from "../../components/GoogleButton";
import AppleButton from "../../components/AppleButton.android";
import MicrosoftButton from "../../components/MicrosoftButton.android";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(AuthContext);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isFieldEdited, setFieldEdited] = useState(false);
  const { height } = Dimensions.get("window");

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
        <View
          style={{
            marginTop: Spacing * 2,
            marginBottom: Spacing * 2,
          }}
        >
          <SmallCornerButton
            navigation={() => navigate("Register")}
            label="Register"
          />
        </View>
        <View>
          <ImageBackground
            style={{
              height: height / 5,
            }}
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
          }}
        >
          <AppTextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => onChangeTextHandler(text)}
            onBlur={validate}
          />
          {!isEmailValid && isFieldEdited && (
            <Text style={{ color: "red" }}>Invalid email address</Text>
          )}
          <AppTextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity
            onPress={() => navigate("RecoverPassword")}
            style={{
              padding: Spacing,
              alignSelf: "flex-end",
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsSemiBold",
                fontSize: FontSize.small,
                color: Colors.primary,
                alignSelf: "flex-end",
              }}
            >
              Forgot your password ?
            </Text>
          </TouchableOpacity>

          <RegularButtonBig
            label="Sign in"
            onPress={() => {
              if (isEmailValid) {
                context?.login(email, password);
              } else {
                console.log("Invalid");
              }
            }}
          />
        </View>
        <View style={{flex: 1, justifyContent:'flex-end'}}>
          <View style={{width:'100%', gap: 4, flex: 1}}>
            <GoogleButton signIn={signIns} />
            <AppleButton signIn={signIns} />
            <MicrosoftButton signIn={signIns} />
            </View>
          </View>
      </SafeView>
    </KeyBoardAwareScrollViewOnVisible>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    height: 100,
    marginTop: 50,
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
