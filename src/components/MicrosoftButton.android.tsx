import { TouchableOpacity, View, Image, Text } from "react-native";
import Spacing from "../constants/Spacing";
import React from "react";
import TextV from "./global/Text";

interface Props {
  signIn: () => void;
}

const MicrosoftButton: React.FC<Props> = ({ signIn }) => {
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
          source={require("../../assets/images/microsoft_logo.png")}
          style={{ height: 20, width: 20, marginRight:10}}
          resizeMode="contain"
        />
        <TextV
          style={{
            textAlign: "center",
            color: "gray",
            fontSize: 12,
            }}
        >
          Sign In with Microsoft
        </TextV>
      </View>
    </TouchableOpacity>
  );
};

export default MicrosoftButton;
