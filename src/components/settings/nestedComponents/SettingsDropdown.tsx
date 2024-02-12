import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type DataSource = { label: string, value: string};

interface Props {
    placeholder?: string;
    label?: string;
    dataSource?: DataSource[];
    selectedValue?: (text: string) => void;
}

const SettingsDropdown : React.FC<Props> = ({placeholder, label, dataSource, selectedValue}) => {
    ///Make get request to get the options
    
    return (
        <View>
            <Text style={labelStyles.labelStyle}>{label}</Text>
            <RNPickerSelect
                placeholder={{label: placeholder ? placeholder : null, value: null}}
                onValueChange={(value : string) => selectedValue && selectedValue(value)}
                items={dataSource ? dataSource : []}
                style={{
                    ...pickerSelectStyles,
                    iconContainer: {top: 10, right: 15},
                }}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                    return <Ionicons name="chevron-down" size={24} />;
                }}
                />
                
        </View>
    );
};

const labelStyles = StyleSheet.create({
    labelStyle:{
        fontSize: 14,
        fontFamily: "PoppinsRegular",
        marginBottom: 5,
        marginTop:20,    
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 14,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 30,
        color: 'black',
        paddingRight: 30,
        height: 40,
    },
});

export default SettingsDropdown;