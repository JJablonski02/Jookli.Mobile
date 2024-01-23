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
  
  const AppTextInputHorizontal: React.FC<TextInputProps> = ({ ...otherProps }) => {
    const [focused, setFocused] = useState<boolean>(false);
    return (
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={Colors.darkText}
        style={[
          {
            fontFamily: "PoppinsRegular",
            fontSize: FontSize.small,
            padding: Spacing,
            backgroundColor: Colors.lightPrimary,
            borderRadius: Spacing,
            width: 150
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
  
  export default AppTextInputHorizontal;
  
  const styles = StyleSheet.create({});