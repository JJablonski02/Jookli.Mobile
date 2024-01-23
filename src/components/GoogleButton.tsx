import { TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";

interface Props {
  signIn: () => void;
}

const GoogleButton: React.FC<Props> = ({ signIn }) => {
  return (
    <TouchableOpacity
      onPress={signIn}
      style={{
        elevation: 5,
        padding: 3,
        borderRadius: 5,
        backgroundColor: "white",
        marginTop: 10,
        width: "90%",
        shadowOpacity: 0.5,
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
          source={require("../../assets/images/googleIcon.png")}
          style={{ height: 20, width: 20, marginRight:10 }}
        />
        <Text
          style={{
            textAlign: "center",
            color: "gray",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Sign In with Google
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleButton;
