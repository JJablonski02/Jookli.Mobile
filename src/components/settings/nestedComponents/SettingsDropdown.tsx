import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {View, Text} from 'react-native';

const SettingsDropdown : React.FC = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const placeholder = {
        label: 'Select time zone...',
        value: null,
    };
    const options =  [
        { label: 'Eastern', value: 'eastern' },
        { label: 'Central', value: 'central' },
        { label: 'Mountain', value: 'mountain' },
        { label: 'Pacific', value: 'pacific' },
    ];
    
    return (
        <View>
            <Text>Select an option:</Text>
            <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={options}
                placeholder={placeholder}
                value={selectedValue}/>
        </View>
    );
};

export default SettingsDropdown;