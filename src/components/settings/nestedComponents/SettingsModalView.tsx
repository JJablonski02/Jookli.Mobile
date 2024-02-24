import React, { useState } from "react";
import { Modal, TouchableOpacity, View, StyleSheet, Platform, FlatList } from "react-native";
import { moderateScale } from "../../../constants/FontSize";
import TextV from "../../global/Text";
import Education from "../../../../locales/options/education.json";
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "../../../constants/Colors";


interface DeserializationProps {
  label: string;
  value: string;
}

  interface Props{
    label: string;
    placeholder: string;
    dataSource: DeserializationProps[];
  };

const SettingsModalView: React.FC<Props> = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const selectValue = (value : string | null) => {
    if(value){
      setSelectedValue(value);
    }

    toggleModal();
  }

  return (
    <View style={styles.container}>
    <TextV style={labelStyles.labelStyle}>
      {props.label}
    </TextV>
      <TouchableOpacity onPress={toggleModal} style={Platform.OS==='ios' ? styles.inputIOS : styles.inputAndroid}>
        <TextV>{selectedValue != null ? selectedValue : props.placeholder}</TextV>
        <Ionicons name="chevron-down" size={24}/>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={toggleModal}
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <View style={styles.modalHeaderContainer}>
            <TouchableOpacity onPress={toggleModal}>
              <Ionicons name="close" style={styles.modalCloseIcon}/>
            </TouchableOpacity>
            </View>
            <View style={styles.modalListViewContainer}>
            <FlatList
              data={props.dataSource}
              renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => selectValue(item.label)}>
                    <TextV style={styles.placeholderContainer}>{item.label}</TextV>
                  </TouchableOpacity>
              )}
              scrollEnabled={false}
            />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputIOS: {
    fontSize: moderateScale(14),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(6),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    color: 'black',
    fontFamily: "PoppinsRegular",
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
inputAndroid: {
    fontSize: moderateScale(14),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(6),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 30,
    color: 'black',
    fontFamily: "PoppinsRegular",
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    width: "96%",
    height: "60%"
    },
    modalCloseIcon: {
      fontSize: 32,
      color: Colors.gray
    },
    modalHeaderContainer: {
      padding: 5,
      borderBottomColor: Colors.gray,
      borderBottomWidth: 0.5
    },
    modalListViewContainer: {
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    placeholderContainer: {
      marginBottom: moderateScale(15),
      fontSize: moderateScale(13)
    },
});

const labelStyles = StyleSheet.create({
  labelStyle:{
      fontSize: moderateScale(14),
      fontFamily: "PoppinsRegular",
      marginBottom: 5,
      marginTop:20,  
      alignSelf: 'flex-start'  
  },
});

export default SettingsModalView;