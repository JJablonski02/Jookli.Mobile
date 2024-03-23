import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {View, StyleSheet, Platform} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import TextV from '../../global/Text';
import { moderateScale } from '../../../constants/FontSize';
import Picker from 'react-native-picker-select';

type DataSource = { label: string, value: string};

interface Props {
    placeholder?: string;
    label?: string;
    dataSource?: DataSource[];
    selectedValue?: (text: string) => void;
    defaultValue?: string;
}

const SettingsDropdown : React.FC<Props> = ({placeholder, label, dataSource, selectedValue, defaultValue}) => {    
    return (
        <View>
            <TextV style={labelStyles.labelStyle}>{label}</TextV>
            <RNPickerSelect
                placeholder={{label: placeholder ? placeholder : null, value: null, textStyle: {allowFontScaling: false}}}
                onValueChange={(value : string) => selectedValue && selectedValue(value)}
                items={dataSource ? dataSource : []}
                style={{
                    ...pickerSelectStyles,
                }}
                value={defaultValue}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                    return <Ionicons name="chevron-down" size={24}/>;
                }}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 
});

const labelStyles = StyleSheet.create({
    labelStyle:{
        fontSize: moderateScale(14),
        fontFamily: "PoppinsRegular",
        marginBottom: 5,
        marginTop:20,    
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: moderateScale(13),
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 4,
        color: 'black',
        fontFamily: "PoppinsRegular",
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(6),
    },
    inputAndroid: {
        fontSize: moderateScale(13),
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(6),
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 30,
        color: 'black',
        fontFamily: "PoppinsRegular",
    },
    placeholder:{
        fontSize: moderateScale(13),
        fontFamily: "PoppinsRegular",
        paddingRight: moderateScale(45)
    },
    iconContainer:{
        top: moderateScale(7),
        right: moderateScale(10)
    }
});

export default SettingsDropdown;
