import {
    Dimensions,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Spacing from "../../constants/Spacing";
  import FontSize from "../../constants/FontSize";
  import Colors from "../../constants/Colors";
  import Font from "../../constants/Font";
  import GoogleButton from "../../components/GoogleButton";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../../types";
  import AppleButton from "../../components/AppleButton.android";
import MicrosoftButton from "../../components/MicrosoftButton.android";

  const { height } = Dimensions.get("window");
  
  type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;
  const signIns = () => {

  };
  
  const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
      <SafeAreaView>
        <View style = {{
          padding: Spacing * 2,
        }}>
          <ImageBackground
            style={{
              height: height / 3,
              marginTop: 50
            }}
            resizeMode="contain"
            source={require("../../../assets/images/JoyProfits_Welcome.png")}
          />
          <View
            style={{
              paddingHorizontal: Spacing * 4,
              paddingTop: Spacing * 2,
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xxLarge,
                color: Colors.primary,
                fontFamily: "PoppinsBold",
                textAlign: "center",
              }}
            >
              Make profits having fun
            </Text>
  
            <Text
              style={{
                fontSize: FontSize.small,
                color: Colors.text,
                fontFamily: "PoppinsRegular",
                textAlign: "center",
                marginTop: Spacing * 2,
              }}
            >
              Register or sign in if your account exists.
            </Text>
          </View>
          <View
            style={{
              paddingTop: Spacing,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => navigate("Login")}
              style={{
                backgroundColor: Colors.primary,
                paddingVertical: Spacing * 1.5,
                paddingHorizontal: Spacing * 2,
                width: "48%",
                borderRadius: Spacing * 3,
                shadowColor: Colors.primary,
                shadowOffset: {
                  width: 0,
                  height: Spacing,
                },
                shadowOpacity: 0.3,
                shadowRadius: Spacing,
              }}
            >
              <Text
                style={{
                  fontFamily: "PoppinsBold",
                  color: Colors.onPrimary,
                  fontSize: FontSize.large,
                  textAlign: "center",
                }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("Register")}
              style={{
                backgroundColor: Colors.primary,
                paddingVertical: Spacing * 1.5,
                paddingHorizontal: Spacing * 2,
                width: "48%",
                borderRadius: Spacing * 3,
              }}
            >
              <Text
                style={{
                  fontFamily: "PoppinsBold",
                  color: Colors.onPrimary,
                  fontSize: FontSize.large,
                  textAlign: "center",
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{
            alignItems: "center",
            paddingTop: Spacing,
          }}>
            <GoogleButton signIn={signIns}/>
          </View>
          <View style={{
            alignItems: "center",
          }}>
            <AppleButton signIn={signIns}/>
          </View>
          <View style={{
            alignItems: "center",
          }}>
            <MicrosoftButton signIn={signIns}/>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default WelcomeScreen;
  
  const styles = StyleSheet.create({});