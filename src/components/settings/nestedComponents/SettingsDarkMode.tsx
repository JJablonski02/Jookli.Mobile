import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Spacing from "../../../constants/Spacing";
import Colors from "../../../constants/Colors";

const SettingsDarkMode : React.FC = () => {
    const [isEnabled, setEnabled] = React.useState(false);
    const toggleSwitch = () => setEnabled(previousState => !previousState);
    return (
    <View style={styles.container}>
        <Text style={styles.description}>The dark theme darkens the light surfaces of the page, creating an impression perfect for the night</Text>
        <Switch 
        style={styles.switch} 
        value={isEnabled}
        trackColor={{true: Colors.primary}}
        onValueChange={toggleSwitch}
        thumbColor={isEnabled ? Colors.background : Colors.background}/>
    </View>
    );
};

export default SettingsDarkMode;

const styles = StyleSheet.create({
    container:{
        marginTop: Spacing,
    },
    description:{
        fontSize: 12,
        fontFamily: "PoppinsRegular",
    },
    switch:{
        marginTop: Spacing,
        alignSelf: 'center'
    }
});