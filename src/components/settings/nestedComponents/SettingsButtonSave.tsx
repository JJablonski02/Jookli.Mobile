import React from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity, Easing, SafeAreaView } from "react-native";
import Spacing from "../../../constants/Spacing";
import Colors from "../../../constants/Colors";
import FontSize from "../../../constants/FontSize";
import {NotifyError} from "../../notifications/Notify";
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