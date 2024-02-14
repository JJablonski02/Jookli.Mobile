import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";

interface Props {
  signIn: () => void;
}

const GoogleButton: React.FC<Props> = ({ signIn }) => {
  return (
    <TouchableOpacity
      onPress={signIn}
      style={styles.buttonStyle}
    >
      <View style={styles.viewStyle}>
        <Image
          source={require("../../assets/images/googleIcon.png")}
          style={{ height: 20, width: 20, marginRight:10 }}
          resizeMode="contain"
        />
        <Text style={styles.buttonTextStyle}>
          Sign In with Google
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  buttonStyle: {
    elevation: 5,
    padding: 3,
    borderRadius: Spacing * 3,
    backgroundColor: "white",
    marginTop: 10,
    width: "100%",
    shadowOpacity: 0.5,
  },
  buttonTextStyle: {
    textAlign: "center",
    color: "gray",
    fontSize: 12,
  },
  viewStyle: {
    flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          margin: 5,
  }
});
