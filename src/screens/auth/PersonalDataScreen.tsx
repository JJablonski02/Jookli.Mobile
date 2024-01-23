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
import {TextInput} from 'react-native-paper';
import { RegisterUserDTO } from "@api";

type Props = NativeStackScreenProps<RootStackParamList, "PersonalData">;


const PersonalDataScreen: React.FC<Props> = ({ route ,navigation: { navigate } }) => {
  console.log(route.params.user);
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View
        style={{
          position: "absolute",
          top: 60,
          left: 15,
        }}
      >
        <Ionicons
          name="arrow-back"
          size={42}
          color="black"
          onPress={() => navigate("Register")}
        />
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View>
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
            <AppTextInputHorizontal placeholder="First Name"/>
          </View>
          <View
            style={{
              marginLeft: Spacing,
            }}
          >
            <AppTextInputHorizontal placeholder="Last Name"></AppTextInputHorizontal>
            
          </View>
        </View>
        <View style={{
            marginTop: Spacing *2,
        }}>
            <Text style={{
                fontSize: FontSize.medium,
                color: Colors.primary,
            }}>
                Select gender
            </Text>
        </View>
        <View>
            <RadioButtonSex/>
        </View>
        <View>
        <TouchableOpacity
          onPress={() => navigate("ConfirmAccount")}
            style={{
              padding: Spacing * 2,
              backgroundColor: Colors.primary,
              marginVertical: Spacing * 3,
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
                textAlign: "center",
                fontSize: FontSize.large,
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalDataScreen;
