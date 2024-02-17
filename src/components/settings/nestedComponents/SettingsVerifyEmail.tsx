import React from "react";
import { View, Touchable, Text, Switch, StyleSheet, TouchableOpacity, Platform} from "react-native";
import Spacing from "../../../constants/Spacing";
import { TextInput } from "react-native-paper";
import AppTextInput from "../../AppTextInput";
import SettingsTextInput from "./SettingsTextInput";
import EarnButton from "../../EarnButton";
import Colors from "../../../constants/Colors";
import FontSize, { moderateScale } from "../../../constants/FontSize";
import TextV from "../../global/Text";


const SettingsVerifyEmail = () => {
    return(
        <View>
            <TextV style={styles.title}>
                Verify your email address
            </TextV>
            <TextV style={styles.section}>
                Move to your email inbox and click on the link we sent you to verify your email address.
                If you have not received any messages from us, please click the button below.
            </TextV>
            <TouchableOpacity style={Platform.OS === 'ios' ? styles.buttonIos : styles.buttonAndroid }>
                <TextV style={styles.textContainer}>
                    Send verification email
                </TextV>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsVerifyEmail;

const styles = StyleSheet.create({
    container: {
        marginTop: Spacing * 2,
        marginHorizontal: Spacing * 3,
    },
    title: {
        fontSize: moderateScale(16),
        fontFamily: 'PoppinsSemiBold',
    },
    section: {
        marginTop: Spacing,
        fontFamily: 'PoppinsRegular',
        fontSize: moderateScale(13),
        textAlign: 'justify'
    },
    buttonContainer: {
        elevation: 5,
        padding: 3,
        borderRadius: Spacing * 2,
        backgroundColor: Colors.primary,
        marginTop: Spacing * 2,
        width: 200,
        shadowOpacity: 0.5,
        alignSelf: "center",
    },
    textContainer:{
        textAlign: "center",
        color: Colors.background,
        fontSize: moderateScale(FontSize.small),
        fontFamily: "PoppinsRegular",
    },
    buttonIos: {
        elevation: 5,
        padding: 6,
        borderRadius: Spacing * 5,
        backgroundColor: Colors.primary,
        marginTop: Spacing * 2,
        width: "60%",
        shadowOpacity: 0.3,
        alignSelf: "center",
      },
      buttonAndroid: {
        elevation: 5,
        padding: 6,
        borderRadius: Spacing * 5,
        backgroundColor: Colors.primary,
        marginTop: Spacing * 2,
        width: "60%",
        shadowOpacity: 0.3,
        alignSelf: "center",
      },

});