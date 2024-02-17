import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Spacing from "../../../constants/Spacing";
import Colors from "../../../constants/Colors";
import { moderateScale } from "../../../constants/FontSize";
import TextV from "../../global/Text";

const SettingsPaymentDetails : React.FC = () => {
    return (
    <View style={styles.container}>
        <TextV style={styles.description}>Add your billing details to receive payments</TextV>
    </View>
    );
};

export default SettingsPaymentDetails;

const styles = StyleSheet.create({
    container:{
        marginTop: Spacing,
    },
    description:{
        fontSize: moderateScale(14),
        fontFamily: "PoppinsRegular",
    },
    switch:{
        marginTop: Spacing,
        alignSelf: 'center'
    }
});