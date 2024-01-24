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

type AuthProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<AuthProps> = ({ navigation: { navigate } }) => {
    return (
        <SafeAreaView style={{
            justifyContent: "center",
            flex: 1
        }}>
                <View style={{
                    alignItems: "center"
                    
                }}>
                    <Text>
                        Home Screen
                    </Text>
                </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
