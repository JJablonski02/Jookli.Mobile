import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import TextV from "./global/Text";

const VerifyEmail = () => {
  const navigation = useNavigation();
    return (
        <View style = {styles.viewContainer}>
            <TextV style = {styles.sectionContainer}>
                Verify Email
            </TextV>
            <TextV style={styles.compareContainer}>
                Refresh your inbox and click on the link we sent you to verify your email address.
            </TextV>
            <Image
                source={require('../../assets/images/sendEmail.png')}
                style={{
                    width:'102.5%',
                    height: 150,
                    marginHorizontal: -Spacing,
                }}/>
            <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}>
                <TextV style={styles.settingsContainer}>
                    Go to settings
                </TextV>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer:{
      marginLeft: Spacing / 2,
      marginRight: Spacing / 2,
      marginTop: Spacing,
      marginBottom: Spacing,
      paddingBottom: Spacing * 2,
      backgroundColor: 'white',
      borderRadius: 5,
      paddingLeft: Spacing,
      paddingTop: Spacing,
  },
  sectionContainer:{
    fontSize: FontSize.medium,
    fontFamily: 'PoppinsRegular',
  },
  namesContainer:{
    fontFamily: 'PoppinsRegular',
    fontSize: FontSize.small,
    marginTop: Spacing,
  },
  valuesContainer:{
    fontFamily: 'PoppinsRegular',
    fontSize: FontSize.medium,
  },
  compareContainer:{
    fontFamily: 'PoppinsRegular',
    fontSize: FontSize.xSmall,
  },
  settingsContainer:{
    fontFamily: 'PoppinsRegular',
    fontSize: FontSize.medium,
    color: Colors.primary,
    marginTop: Spacing,
    marginLeft: Spacing,
  }
});

export default VerifyEmail;