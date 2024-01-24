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
  
  type Props = NativeStackScreenProps<RootStackParamList, "Register">;
  
  const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    const { height } = Dimensions.get("window");
    const signIns = () => {

    };
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
      <SafeAreaView>
        <KeyboardAwareScrollView>
        <View
          style={{
            padding: Spacing * 2,
          }}
        >
          <View style={{
            marginTop: Spacing * 2,
            marginBottom: Spacing * 2,
          }}>
              <TouchableOpacity style={{
                position: "absolute",
                top: Spacing * 2,
                right: Spacing * 2,
                zIndex: 1,
                borderWidth: 1,
                borderColor: Colors.gray,
                borderRadius: 3,
                paddingLeft: 5,
                paddingRight: 5,
              }} onPress={() => navigate("Login")}>
                <Text
                  style={{
                    fontFamily: "PoppinsSemiBold",
                    color: Colors.primary,
                    textAlign: "center",
                    fontSize: FontSize.small,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
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
                maxWidth: "80%",
                textAlign: "center",
              }}
            >
              Register through another service
            </Text>
            <GoogleButton signIn={signIns}/>
            <AppleButton signIn={signIns}/>
            <MicrosoftButton signIn={signIns}/>
          </View>
          <View>
            <AppTextInput 
            placeholder="Email" 
            onChangeText={text => setUser(prevUser => ({ ...prevUser, email: text }))} />
            <AppTextInput    
            placeholder="Password" 
            secureTextEntry={true} 
            onChangeText={text => user?.password == text}/>
            <AppTextInput 
            placeholder="Confirm Password" 
            secureTextEntry={true} 
            onChangeText={text => user?.confirmPassword == text}/>
          </View>
  
          <TouchableOpacity
          onPress={() => navigate('PersonalData', {user: user})}
            style={{
              elevation: 5,
              padding: 5,
              borderRadius: Spacing * 3,
              backgroundColor: Colors.primary,
              marginTop: 10,
              shadowOpacity: 0.5,
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsBold",
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
              }}
            >
              Move on
            </Text>
          </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  };
  
  export default RegisterScreen;
  