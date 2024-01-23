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

  type Props = NativeStackScreenProps<RootStackParamList, "RecoverPassword">;

  const RecoverPasswordScreen: React.FC<Props> = ({navigation: {navigate}}) => {
    return(
    <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center'
    }}
    >
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
                fontFamily: "PoppinsBold",
                paddingLeft: Spacing * 5,
                paddingRight: Spacing *5,
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
                maxWidth: "80%",
                textAlign: "center",
                color: Colors.darkText
              }}
            >
              Provide additional information to help with the account recovery process.
            </Text>
          </View>
          <View style= {{
            marginTop: 30,
          }}
          >
          <AppTextInput placeholder="Enter your e-mail address">
            
            </AppTextInput>
          </View>

          <TouchableOpacity
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
              Send
            </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
    );
  }

  export default RecoverPasswordScreen;

  const styles = StyleSheet.create({});