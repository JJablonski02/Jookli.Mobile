import React from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity, Easing, SafeAreaView, Platform } from "react-native";
import Spacing from "../../../constants/Spacing";
import Colors from "../../../constants/Colors";
import FontSize from "../../../constants/FontSize";
import {NotifyError} from "../../notifications/Notify";
import TextV from "../../global/Text";
interface Props {
    onPress?: () => string | null;
};

const SettingsButtonSave : React.FC<Props> = ({onPress}) => {
    const [message, setMessage] = React.useState<string | null>();

    const handleOnPress = async () => {
        if(onPress){
            const result = onPress();
            setMessage(result);
            
            if(result !== null){
                NotifyError("Error", result);
            }
        }
    };

    return (
    <View style={styles.container}>
        <TouchableOpacity 
        style={Platform.OS === "ios" ? styles.buttonIos : styles.buttonAndroid}
        onPress={handleOnPress}>
            <TextV style={styles.textContainer}>Save</TextV>
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
    buttonIos: {
        elevation: 5,
        padding: 6,
        borderRadius: Spacing * 5,
        backgroundColor: Colors.primary,
        marginTop: Spacing * 2,
        width: "50%",
        shadowOpacity: 0.3,
        alignSelf: "center",
      },
      buttonAndroid: {
        elevation: 5,
        padding: 6,
        borderRadius: Spacing * 5,
        backgroundColor: Colors.primary,
        marginTop: Spacing * 2,
        width: "50%",
        shadowOpacity: 0.3,
        alignSelf: "center",
      },
      textContainer: {
        textAlign: "center",
        color: Colors.background,
        fontSize: FontSize.medium,
        fontFamily: "PoppinsRegular",
      },
});