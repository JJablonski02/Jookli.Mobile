import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {AyetOfferwall} from 'ayetsdk';
import { EarnStackParamList } from '../../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BackHandler } from 'react-native';

type EarnStackScreenProps = NativeStackScreenProps<EarnStackParamList, 'AyeT'>;

const AyetOfferwallScreen : React.FC<EarnStackScreenProps> = ({navigation}) => {
  const onClose = () => {
    const parentNavigator = navigation.getParent();
    if(parentNavigator){
      navigation.navigate('Games');
      parentNavigator.setOptions({headerShown: true})
    };
  };



  useEffect(() => {
    const handleBackGesture = () => {
      onClose();
      return true; // Return true to indicate that the gesture has been handled
    };

    const backHandler = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      handleBackGesture();
    });

    return () => backHandler(); // Cleanup the event listener when the component unmounts
  }, [navigation, onClose]);

  return <AyetOfferwall userId="12345" adslotId="15982" onClose={onClose} />
      
};

export default AyetOfferwallScreen;