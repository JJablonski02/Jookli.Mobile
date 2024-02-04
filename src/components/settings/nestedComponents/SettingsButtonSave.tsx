import React from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import Spacing from "../../../constants/Spacing";
import Colors from "../../../constants/Colors";
import FontSize from "../../../constants/FontSize";
import { NotifierRoot, Notifier, NotifierComponents } from "react-native-notifier";

interface Props {
    onPress?: () => string | null;
};

const SettingsButtonSave : React.FC<Props> = ({onPress}) => {
    const [message, setMessage] = React.useState<string | null>(null);
    const handleOnPress = () => {
        if(onPress){
            setMessage(onPress());
            if(message  != null){
                Notifier.showNotification({
                    title: "Error",
                    description: message,
                    Component: NotifierComponents.Alert,
                    componentProps:{
                        alertType: "error",
                    },
                    duration: 0,
                    showAnimationDuration: 800,
                });
            }
        }
    };
    return (
    <View style={styles.container}>
        <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={handleOnPress}>
            <Text style={styles.textContainer}>Save</Text>
        </TouchableOpacity>
    </View>
    );
};

export default SettingsButtonSave;

const styles = StyleSheet.create({
    container:{
        marginTop: Spacing,
    },
    description:{
        fontSize: 12,
        fontFamily: "PoppinsRegular",
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
      textContainer: {
        textAlign: "center",
        color: Colors.background,
        fontSize: FontSize.medium,
        fontWeight: "bold",
      },
});