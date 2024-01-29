import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

const VerifyEmail = () => {
    return (
        <View style = {styles.viewContainer}>
            <Text style = {styles.sectionContainer}>
                Verify Email
            </Text>
            <Text style={styles.compareContainer}>
                Refresh your inbox and click on the link we sent you to verify your email address.
            </Text>
            <Image
                source={require('../../assets/images/sendEmail.png')}
                style={{
                    width:'102.5%',
                    height: 150,
                    marginHorizontal: -Spacing,
                }}/>
            <TouchableOpacity>
                <Text style={styles.settingsContainer}>
                    Go to settings
                </Text>
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
    fontSize: FontSize.large,
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