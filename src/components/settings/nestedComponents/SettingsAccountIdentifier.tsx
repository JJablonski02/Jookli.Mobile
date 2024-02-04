import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacing from "../../../constants/Spacing";
import Colors from "../../../constants/Colors";
import { ALERT_TYPE, AlertNotificationRoot, Dialog } from "react-native-alert-notification";

const SettingsAccountIdentifier : React.FC = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.description}>this will help you quickly contact our support team.</Text>
        <Text style={styles.accountNumber}>1065-569-800</Text>
        <AlertNotificationRoot>
        <TouchableOpacity style={{
            marginTop: Spacing,
            alignSelf: 'flex-end',
        }}
        onPress={() => {
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: 'Delete Account',
                textBody: 'Deleting your account prevents you from logging in again. Your data will be permanently deleted and we will not be able to restore it. Any funds you have in your account will not be withdrawn.',
                button: 'Delete',
            onPressButton: () => {
                //handle onPress make request to server => delete account
            }})
        }}>
            <Text style={styles.deleteAccount}>Delete Account</Text>
        </TouchableOpacity>
        </AlertNotificationRoot>
    </View>
    );
};

export default SettingsAccountIdentifier;

const styles = StyleSheet.create({
    container:{
        marginTop: Spacing,
    },
    description:{
        fontSize: 12,
        fontFamily: "PoppinsRegular",
    },
    accountNumber:{
        marginTop: Spacing,
    },
    deleteAccount:{
        color: Colors.red,
        alignSelf: 'flex-end',
        marginBottom: Spacing * 4,
    }
});