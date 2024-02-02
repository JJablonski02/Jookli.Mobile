import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import Spacing from "../../../constants/Spacing";

const SettingsTextInput : React.FC = () => {
    const [focused, setFocused] = useState<boolean>(false);
    return(
        <View>
            <TextInput 
            onFocus= {() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Email address"
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