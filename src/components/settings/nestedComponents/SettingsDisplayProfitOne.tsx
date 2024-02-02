import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Spacing from "../../../constants/Spacing";
import Colors from "../../../constants/Colors";

const SettingsDisplayProfitOne : React.FC = () => {
    const [focused, setState] = useState(Boolean);
    return(
    <View>
        <TouchableOpacity
        onPress={() => setState}
        style={
            [styles.button,
            focused && {
                borderColor: Colors.primary,
            }
            ]
        }>
            <Text style={styles.buttonText}>
                0.00
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => setState}
        style={
            [styles.button,
            focused && {
                borderColor: Colors.primary,
            }
            ]
        }>
            <Text style={styles.buttonText}>
                0.00
            </Text>
        </TouchableOpacity>
    </View>
    );
};

export default SettingsDisplayProfitOne;

const styles = StyleSheet.create({
    button:{
        width: '50%',
        height: 50,
        borderRadius: Spacing,
        borderWidth: 1,
        borderColor: 'grey',
        alignSelf: 'center',
        marginTop: Spacing * 2,
    },
    buttonText:{
        textAlign: 'center',
        marginTop: 15,
    }
});