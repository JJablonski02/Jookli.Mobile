import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Spacing from "../../../constants/Spacing";
import Colors from "../../../constants/Colors";

const SettingsPaymentDetails : React.FC = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.description}>Add your billing details to receive payments</Text>
    </View>
    );
};

export default SettingsPaymentDetails;

const styles = StyleSheet.create({
    container:{
        marginTop: Spacing,
    },
    description:{
        fontSize: 12,
        fontFamily: "PoppinsRegular",
    },
    switch:{
        marginTop: Spacing,
        alignSelf: 'center'
    }
});