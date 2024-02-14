import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import Colors from '../constants/Colors'
import Spacing from '../constants/Spacing'
import FontSize from '../constants/FontSize'

interface Props extends TouchableOpacityProps{
    label: string
    onPress: () => void
}

export const RegularButtonSmall: React.FC<Props> = ({label, onPress, ...otherProps}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyleSmall} {...otherProps}>
            <Text style={styles.buttonTextStyle}>{label}</Text>
        </TouchableOpacity>
        
    )
}

export const RegularButtonBig: React.FC<Props> = ({label, onPress, ...otherProps}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyleBig} {...otherProps}>
            <Text style={styles.buttonTextStyle}>{label}</Text>
        </TouchableOpacity>
        
    )
}



const styles = StyleSheet.create({
    buttonStyleSmall: {
        backgroundColor: Colors.primary,
        paddingVertical: Spacing,
        paddingHorizontal: Spacing * 2,
        width: "48%",
        borderRadius: Spacing * 3,
        shadowColor: Colors.primary,
        shadowOffset: {
          width: 0,
          height: Spacing,
        },
        shadowOpacity: 0.3,
        shadowRadius: Spacing,
      },
      buttonStyleBig: {
        backgroundColor: Colors.primary,
        paddingVertical: Spacing,
        paddingHorizontal: Spacing * 2,
        width: "100%",
        borderRadius: Spacing * 3,
        shadowColor: Colors.primary,
        shadowOffset: {
          width: 0,
          height: Spacing,
        },
        shadowOpacity: 0.3,
        shadowRadius: Spacing,
      },
      buttonTextStyle: {
        fontFamily: "PoppinsRegular",
        color: Colors.onPrimary,
        fontSize: FontSize.small,
        textAlign: "center",
      },
});
