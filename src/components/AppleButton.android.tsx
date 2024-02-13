import { TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";

interface Props {
  signIn: () => void;
}

const AppleButton: React.FC<Props> = ({ signIn }) => {
  return (
    <TouchableOpacity
      onPress={signIn}
      style={{
        elevation: 5,
        padding: 3,
        borderRadius: Spacing * 3,
        backgroundColor: "white",
        marginTop: 10,
        width: "100%",
        shadowOpacity: 0.5,
        maxWidth: 500,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          margin: 5,
        }}
      >
        <Image
          source={require("../../assets/images/apple_logo_black.png")}
          style={{ height: 20, width: 20, marginRight:10}}
          resizeMode="contain"
        />
        <Text
          style={{
            textAlign: "center",
            color: "gray",
            fontSize: 12,
          }}
        >
          Sign In with Apple
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppleButton;
