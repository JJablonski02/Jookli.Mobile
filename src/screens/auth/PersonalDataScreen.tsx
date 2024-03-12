import {
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
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import AppTextInputHorizontal from "../../components/AppTextInputHorizontal";
import RadioButtonSex from "../../components/RadioButtonSex";
import { SafeView } from "../../components/global/SafeView";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import Constants from "expo-constants";
import { RegisterUserDTO } from "@api";


type Props = NativeStackScreenProps<RootStackParamList, "PersonalData">;

const PersonalDataScreen: React.FC<Props> = ({
  route,
  navigation: { navigate },
}) => {

  const user : RegisterUserDTO = route.params.user;
  const [userState, setUserState] = React.useState<RegisterUserDTO>(user);

  return (
    <SafeView>
    <View
      style={{
        padding: Spacing * 2,
      }}
    >
      <View style={{ position: "absolute", top: 60 }}>
        <Ionicons
          name="arrow-back"
          size={42}
          color="black"
          onPress={() => navigate("Register")}
        />
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsSemiBold",
                fontSize: FontSize.xLarge,
                color: Colors.primary,
                marginVertical: Spacing * 3,
              }}
            >
              Who are you?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginRight: Spacing,
              }}
            >
              <AppTextInputHorizontal placeholder="First Name" />
            </View>
            <View
              style={{
                marginLeft: Spacing,
              }}
            >
              <AppTextInputHorizontal placeholder="Last Name"></AppTextInputHorizontal>
            </View>
          </View>
          <View
            style={{
              marginTop: Spacing * 2,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: FontSize.medium,
                color: Colors.primary,
              }}
            >
              Select gender
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <RadioButtonSex />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigate("Register")}
              style={{
                padding: Spacing,
                backgroundColor: Colors.primary,
                marginVertical: Spacing * 3,
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
                  textAlign: "center",
                  fontSize: FontSize.large,
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
    </SafeView>
  );
};

export default PersonalDataScreen;
