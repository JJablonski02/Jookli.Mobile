import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Spacing from "../../../constants/Spacing";
import Colors from "../../../constants/Colors";
import TextV from "../../global/Text";
import { moderateScale } from "../../../constants/FontSize";

interface Props{
    label?: string;
    isSwitchEnabled?: (isEnabled: boolean) => void;
}

const SettingsSwitchComponent : React.FC<Props> = (props) => {
    const [isEnabled, setEnabled] = React.useState(false);
    const toggleSwitch = () => {
        setEnabled(previousState => !previousState);

        if(props.isSwitchEnabled){
            props.isSwitchEnabled(!isEnabled);
        }
    };

    return (
    <View style={styles.container}>
        {props.label && <TextV style={styles.description}>{props.label}</TextV>}
        <Switch 
        style={styles.switch} 
        value={isEnabled}
        trackColor={{true: Colors.primary}}
        onValueChange={toggleSwitch}
        thumbColor={isEnabled ? Colors.background : Colors.background}/>
    </View>
    );
};

export default SettingsSwitchComponent;

const styles = StyleSheet.create({
    container:{
        marginTop: Spacing,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: Spacing,
        alignItems: 'center',
    },
    description:{
        fontSize: moderateScale(14),
        fontFamily: "PoppinsRegular",
        flex: 1,
        marginRight: Spacing * 2,
    },
    switch:{
        alignSelf: 'center',
    }
});