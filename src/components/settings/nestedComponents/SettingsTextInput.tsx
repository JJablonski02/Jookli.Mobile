import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import Spacing from "../../../constants/Spacing";

interface SettingsTextInputProps {
    placeholder: string;
    variant: Variant;
    required?: boolean;
    isEmail?: boolean;
    isOnlyDigits?: boolean;
    maxLength?: number;
    onTextChange?: (text: string) => void;
};

export enum Variant {
    Email,
    FirstName,
    LastName,
    Street,
    HouseNumber,
    ZipCode,
    City,
    StateRegion,
    PhoneNumber,
};


const SettingsTextInput : React.FC<SettingsTextInputProps> = (props) => {
    const [focused, setFocused] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    return(
        <View>
            <TextInput 
            onFocus= {() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={props.placeholder}
            onChangeText={props.onTextChange}
            maxLength={props.maxLength}
            style={[
                {
                    borderBottomWidth: 1,
                    borderBottomColor: '#E0E0E0',
                    paddingVertical: 10,
                    paddingBottom: 0,
                    fontSize: 12,
                    fontFamily: 'PoppinsRegular',
                    marginBottom: Spacing,
                },
                focused && {
                    borderBottomColor: Colors.primary,
                }
            ]}/>
        </View>
    );
};

export default SettingsTextInput;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 30,
    },
    title: {
        fontSize: 14,
        fontFamily: 'PoppinsBold',
    },
    section: {
        marginTop: 10,

    },
});