import React, {useEffect, useState} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import Spacing from "../../../constants/Spacing";
import Colors from "../../../constants/Colors";
import TextV from "../../global/Text";

export enum DisplayProfitFormatType{
    TwoZeros = 1,
    ThreeZeros = 2,
}

interface Props{
    value?: (selectedValue: DisplayProfitFormatType) => void;
    defaultValue?: DisplayProfitFormatType;
}

const SettingsDisplayProfitOne : React.FC<Props> = (props) => {
    const [checked, setChecked] = useState<DisplayProfitFormatType>();

    useEffect(() => {
        if(props.value){
            if(checked){
                props.value(checked);
            }
        }
    }, [checked])

    useEffect(() => {
        if(props.defaultValue){
            setChecked(props.defaultValue);
        }
    }, [props.defaultValue])

    return(
    <View>
        <TouchableOpacity
        onPress={() => setChecked(DisplayProfitFormatType.TwoZeros)}
        style={[
            styles.button,
            checked === DisplayProfitFormatType.TwoZeros ? styles.buttonSelected : null,
        ]}>
            <TextV style={styles.buttonText}>
                0.00
            </TextV>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => setChecked(DisplayProfitFormatType.ThreeZeros)}
        style={[
            styles.button,
            checked === DisplayProfitFormatType.ThreeZeros ? styles.buttonSelected : null,
        ]}>
            <TextV style={styles.buttonText}>
                0.000
            </TextV>
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