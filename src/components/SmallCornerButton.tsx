import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

interface Props extends TouchableOpacityProps {
    label: string;
  navigation: () => void;
}

const SmallCornerButton: React.FC<Props> = ({ navigation, label }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={navigation}>
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SmallCornerButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: Spacing * 2,
    right: Spacing * 2,
    zIndex: 1,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 5,
  },
  textStyle: {
    fontFamily: "PoppinsSemiBold",
    color: Colors.primary,
    textAlign: "center",
    fontSize: FontSize.small,
  },
});
