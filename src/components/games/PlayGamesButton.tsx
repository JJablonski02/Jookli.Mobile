import React from 'react';
import { TouchableOpacity, StyleSheet, TouchableOpacityProps, GestureResponderEvent } from 'react-native';
import Colors from '../../constants/Colors';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EarnStackParamList } from '../../types';
import TextV from '../global/Text';

const PlayGamesButton: React.FC<TouchableOpacityProps> = ({onPress,...props}) => {
    const handleOnPress = (event: GestureResponderEvent) => {
        if(onPress){
            onPress(event);
        }
    };

    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={handleOnPress}>
        <TextV style={styles.textContainer}>
            Play games
        </TextV>
    </TouchableOpacity>
    );
};

export default PlayGamesButton;

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 5,
        padding: 5,
        borderRadius: Spacing,
        backgroundColor: Colors.primary,
        marginTop: 10,
        width: 150,
        shadowOpacity: 0.5,
    },
    textContainer:{
        textAlign: "center",
        color: Colors.background,
        fontSize: FontSize.medium,
        fontWeight: "bold",
    }
});