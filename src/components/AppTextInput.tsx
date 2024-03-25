import {
  StyleSheet,
  Text,
  TextInputProps,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import { TextInput } from "react-native-gesture-handler";

const AppTextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
  const [focused, setFocused] = useState<boolean>(false);
  
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      allowFontScaling={false}
      autoCorrect={false}
      style={[
        {
          fontFamily: "PoppinsRegular",
          fontSize: FontSize.small,
          padding: Spacing,
          backgroundColor: Colors.background,
          borderRadius: Spacing * 3,
          marginVertical: Spacing,
          borderColor: Colors.active,
          borderWidth: 1,
          paddingLeft: Spacing * 2,
          paddingRight: Spacing * 2,
          width: "100%"
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