import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';
import FontSize from '../constants/FontSize';

interface Props {
    navigate: () => void;
  }

const EarnButton: React.FC<Props> = ({navigate}) => {
    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={navigate}>
        <Text style={styles.textContainer}>
            Earn
        </Text>
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