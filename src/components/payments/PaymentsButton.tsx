import {
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import FontSize from "../../constants/FontSize";
import Spacing from "../../constants/Spacing";
import { TouchableOpacity } from "react-native-gesture-handler";
import TextV from "../global/Text";

interface Props{
  label?: string;
}

const PaymentsButton: React.FC<Props> = (props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [email, setEmail] = useState(null);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{alignSelf: "flex-end"}}>
        <View style={styles.button}>
          <TextV style={styles.buttonText}>{props.label}</TextV>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentsButton;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    borderTopColor: Colors.gray,
    width: "100%",
    marginTop: Spacing * 2,
  },
  button:{
    marginTop: Spacing,
    alignItems: 'flex-end',
    marginRight: Spacing * 2,
  },
  buttonText:{
    fontSize: FontSize.medium,
    fontFamily: "PoppinsBold",
  }
});
