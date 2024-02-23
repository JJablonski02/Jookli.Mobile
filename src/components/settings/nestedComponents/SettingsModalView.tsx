import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View, StyleSheet, Platform, FlatList, TouchableHighlight } from "react-native";
import { moderateScale } from "../../../constants/FontSize";
import TextV from "../../global/Text";
import Education from "../../../../locales/options/education.json";
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
    label?: string;
};

const fetchFinishedSchools = () => {
    const data: Props[] =  Object.keys(Education.FinishedSchools).map((key: string) => {
      return {
        label: Education.FinishedSchools[key as keyof typeof Education.FinishedSchools],
        value: key,
      };
    });
  
    return data;
  };

  

const SettingsModalView: React.FC<Props> = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={Platform.OS==='ios' ? styles.inputIOS : styles.inputAndroid}>
        <TextV>{props.label}</TextV>
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
            <TouchableOpacity onPress={toggleModal}>
              <TextV>Close Modal</TextV>
            </TouchableOpacity>
            <FlatList
              data={fetchFinishedSchools()}
              renderItem={({ item }) => (
                  <TouchableOpacity onPress={toggleModal}>
                    <TextV>{item.label}</TextV>
                  </TouchableOpacity>
              )}
            />
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
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(6),
    marginTop: moderateScale(10),
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
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: "80%",
    },
});

export default SettingsModalView;