import React from "react";
import { View, Touchable, Text, Switch, StyleSheet, TouchableOpacity} from "react-native";
import Spacing from "../../../constants/Spacing";
import { TextInput } from "react-native-paper";
import AppTextInput from "../../AppTextInput";
import SettingsTextInput from "./SettingsTextInput";
import EarnButton from "../../EarnButton";
import Colors from "../../../constants/Colors";
import FontSize from "../../../constants/FontSize";

const SettingsVerifyEmail = () => {
    return(
        <View>
            <Text style={styles.title}>
                Verify your email address
            </Text>
            <Text style={styles.section}>
                Move to your email inbox and click on the link we sent you to verify your email address.
            </Text>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.textContainer}>
                    Send verification email
                </Text>
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
        fontSize: 14,
        fontFamily: 'PoppinsBold',
    },
    section: {
        marginTop: Spacing,

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
        fontSize: FontSize.medium,
        fontWeight: "bold",
    }
});