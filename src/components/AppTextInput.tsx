import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

const AppTextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [email ,setEmail] = useState(null);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      style={[
        {
          fontFamily: "PoppinsRegular",
          fontSize: FontSize.medium,
          padding: Spacing,
          backgroundColor: Colors.background,
          borderRadius: Spacing * 3,
          marginVertical: Spacing,
          borderColor: Colors.active,
          borderWidth: 1,
          paddingLeft: Spacing * 2,
          paddingRight: Spacing * 2,
        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.primary,
          shadowOffset: { width: 4, height: Spacing },
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
      {...otherProps}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});