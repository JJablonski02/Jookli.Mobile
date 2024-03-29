import React from 'react';
import { TouchableOpacity, StyleSheet, TouchableOpacityProps, GestureResponderEvent } from 'react-native';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';
import FontSize from '../constants/FontSize';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EarnStackParamList } from '../types';
import TextV from './global/Text';



const EarnButton: React.FC<TouchableOpacityProps> = ({onPress,...props}) => {
    const handleOnPress = (event: GestureResponderEvent) => {
        if(onPress){
            onPress(event);
        }
    };

    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={handleOnPress}>
        <TextV style={styles.textContainer}>
            Earn
        </TextV>
    </TouchableOpacity>
    );
};

export default EarnButton;

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 5,
        padding: 3,
        borderRadius: Spacing * 2,
        backgroundColor: Colors.primary,
        marginTop: 10,
        width: 100,
        shadowOpacity: 0.5,
    },
    textContainer:{
        textAlign: "center",
        color: Colors.background,
        fontSize: FontSize.medium,
        fontWeight: "bold",
    }
});