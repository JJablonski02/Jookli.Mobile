import DateTimePickerModal from "react-native-modal-datetime-picker";
import React, { useState } from "react";
import { Button, View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { moderateScale, scale } from "../../../constants/FontSize";
import Ionicons from '@expo/vector-icons/Ionicons';
import TextV from "../../global/Text";
import Spacing from "../../../constants/Spacing";

interface Props {
    label?: string;
}


const SettingsDatePicker: React.FC<Props> = ({label}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [day, setDay] = useState<string>("23");
    const [month, setMonth] = useState<string>("04");
    const [year, setYear] = useState<string>("2023");

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date : Date) => {
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        setDay(day);
        setMonth(month);
        setYear(year);
      hideDatePicker();
    };

    return (
      <View>
        <View style={styles.container}>
            <View>
            <TextV style={labelStyles.labelStyle}>Day</TextV>
            <TouchableOpacity style={Platform.OS==='ios'?styles.inputIOS : styles.inputAndroid} activeOpacity={1.0} onPress={showDatePicker}>
                <TextV>{day}</TextV>
                <Ionicons name="chevron-down" size={24} color="black" style={Platform.OS === 'ios' ? styles.inputIOS2 : styles.inputAndroid2}/>
            </TouchableOpacity>
            </View>
            <View>
            <TextV style={labelStyles.labelStyle}>Month</TextV>
            <TouchableOpacity style={Platform.OS==='ios'?styles.inputIOS : styles.inputAndroid} activeOpacity={1.0} onPress={showDatePicker}>
                <TextV>{month}</TextV>
                <Ionicons name="chevron-down" size={24} color="black" style={Platform.OS === 'ios' ? styles.inputIOS2 : styles.inputAndroid2}/>
            </TouchableOpacity>
            </View>
            <View>
            <TextV style={labelStyles.labelStyle}>Year</TextV>
            <TouchableOpacity style={Platform.OS==='ios'?styles.inputIOS : styles.inputAndroid} activeOpacity={1.0} onPress={showDatePicker}>
                <TextV>{year}</TextV>
                <Ionicons name="chevron-down" size={24} color="black" />
            </TouchableOpacity>
            </View>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          display="spinner"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    );
};

export default SettingsDatePicker;

const labelStyles = StyleSheet.create({
    labelStyle:{
        fontSize: moderateScale(14),
        fontFamily: "PoppinsRegular",
        marginBottom: 5,
        marginTop:20,    
    },
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: "100%",
    },
    inputIOS: {
        fontSize: moderateScale(14),
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 4,
        color: 'black',
        fontFamily: "PoppinsRegular",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(6),  
    },
    inputIOS2:{
        marginLeft: scale(20),
    },
    inputAndroid: {
        fontSize: moderateScale(14),
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 30,
        color: 'black',
        fontFamily: "PoppinsRegular",
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(6),
    },
    inputAndroid2:{
        marginLeft: scale(20),
    }
});
