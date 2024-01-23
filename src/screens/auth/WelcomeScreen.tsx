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
  const { height } = Dimensions.get("window");
  
  type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;
  const signIns = () => {

  };
  
  const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
      <SafeAreaView>
        <View>
          <ImageBackground
            style={{
              height: height / 2.5,
              marginTop: 50
            }}
            resizeMode="contain"
            source={require("../../assets/images/welcome-img.png")}
          />
          <View
            style={{
              paddingHorizontal: Spacing * 4,
              paddingTop: Spacing * 4,
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
              Register or login if your account extists.
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: Spacing * 2,
              paddingTop: Spacing * 6,
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
                borderRadius: Spacing,
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
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("Register")}
              style={{
                backgroundColor: Colors.primary,
                paddingVertical: Spacing * 1.5,
                paddingHorizontal: Spacing * 2,
                width: "48%",
                borderRadius: Spacing,
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
          }}>
            <GoogleButton signIn={signIns}/>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default WelcomeScreen;
  
  const styles = StyleSheet.create({});