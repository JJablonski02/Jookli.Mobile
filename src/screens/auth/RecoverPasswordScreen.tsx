import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
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
import AppTextInput from "../../components/AppTextInput";
import { SafeView } from "../../components/SafeView";
import { RegularButtonBig } from "../../components/RegularButton";

type Props = NativeStackScreenProps<RootStackParamList, "RecoverPassword">;

const RecoverPasswordScreen: React.FC<Props> = ({
  navigation: { navigate },
}) => {

  const [email, sendEmail] = React.useState("");

  return (
    <View style={{justifyContent: 'center', flex: 1}}>
    <SafeView>
        <View
          style={{
            padding: Spacing * 2,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xLarge,
                color: Colors.primary,
                fontFamily: "PoppinsRegular",
                alignContent: "center",
                textAlign: "center",
                marginVertical: Spacing * 3,
              }}
            >
              Having trouble logging in ?
            </Text>
            <Text
              style={{
                fontFamily: "PoppinsSemiBold",
                fontSize: FontSize.small,
                textAlign: "center",
                color: Colors.darkText,
              }}
            >
              Provide additional information to help with the account recovery
              process.
            </Text>
          </View>
          <View
            style={{
              marginTop: 30,
              gap: Spacing * 2,
            }}
          >
            <AppTextInput placeholder="Enter your e-mail address"></AppTextInput>
            <RegularButtonBig label="Send" onPress={() => sendEmail('')}/>
          </View>
        </View>
    </SafeView>
    </View>
  );
};

export default RecoverPasswordScreen;

const styles = StyleSheet.create({});
