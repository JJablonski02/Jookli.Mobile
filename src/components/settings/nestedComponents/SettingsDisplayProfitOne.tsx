import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Spacing from "../../../constants/Spacing";
import Colors from "../../../constants/Colors";

const SettingsDisplayProfitOne : React.FC = () => {
    const [checked, setChecked] = useState('first');
    return(
    <View>
        <TouchableOpacity
        onPress={() => setChecked('first')}
        style={[
            styles.button,
            checked === 'first' ? styles.buttonSelected : null,
        ]}>
            <Text style={styles.buttonText}>
                0.00
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => setChecked('second')}
        style={[
            styles.button,
            checked === 'second' ? styles.buttonSelected : null,
        ]}>
            <Text style={styles.buttonText}>
                0.000
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
        borderWidth: 2,
        borderColor: 'grey',
        alignSelf: 'center',
        marginTop: Spacing * 2,
    },
    buttonText:{
        textAlign: 'center',
        marginTop: 15,
    },
    buttonSelected:{
        borderColor: Colors.primary,
    },
});