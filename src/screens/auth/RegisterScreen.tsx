import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import AppTextInput from "../../components/AppTextInput";
import { RegisterUserDTO } from "@api";
import LoginScreen from "./LoginScreen";
import GoogleButton from "../../components/GoogleButton";
import AppleButton from "../../components/AppleButton.android";
import MicrosoftButton from "../../components/MicrosoftButton.android";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegularButtonBig } from "../../components/RegularButton";
import SmallCornerButton from "../../components/SmallCornerButton";
import { SafeView } from "../../components/global/SafeView";
import KeyBoardAwareScrollViewOnVisible from "../../components/KeyboardScrollView";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const { height } = Dimensions.get("window");
  const signIns = () => {};
  const [user, setUser] = React.useState<RegisterUserDTO>({
    email: "TEST",
    password: "TEST",
    confirmPassword: "TEST",
    firstName: "TEST",
    lastName: "TEST",
    gender: 1,
    registrationSource: 1,
    pushNotificationToken: true,
    isLocationAllowed: true,
  });

  return (
    <KeyBoardAwareScrollViewOnVisible>
      <SafeView>
        <View
          style={{
            marginTop: Spacing * 2,
            marginBottom: Spacing * 2,
            flex: 1,
          }}
        >
          <SmallCornerButton
            navigation={() => navigate("Login")}
            label="Login"
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
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: "PoppinsBold",
              marginVertical: Spacing,
              textAlign: "center",
            }}
          >
            Create an account to start earning
          </Text>
          <Text
            style={{
              fontFamily: "PoppinsRegular",
              fontSize: FontSize.small,
              textAlign: "center",
            }}
          >
            Register through another service
          </Text>
        </View>
        <View
          style={{
            gap: 2,
            borderBottomColor: Colors.gray,
            borderBottomWidth: 1,
            alignItems: "center",
            flex: 1,
          }}
        >
          <GoogleButton signIn={signIns} />
          <AppleButton signIn={signIns} />
          <MicrosoftButton signIn={signIns} />
        </View>
        <View style={{ alignItems: "center", flex: 1, justifyContent: 'flex-end'}}>
          <AppTextInput
            placeholder="Email"
            onChangeText={(text) =>
              setUser((prevUser) => ({ ...prevUser, email: text }))
            }
          />
          <AppTextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) =>
              setUser((prevUser) => ({ ...prevUser, password: text }))
            }
          />
          <AppTextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={(text) =>
              setUser((prevUser) => ({ ...prevUser, confirmPassword: text }))
            }
          />
          <RegularButtonBig
            label="Move on"
            onPress={() => navigate("PersonalData", { user: user })}
          />
        </View>
      </SafeView>
    </KeyBoardAwareScrollViewOnVisible>
  );
};

export default RegisterScreen;
