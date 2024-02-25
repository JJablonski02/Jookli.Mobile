import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
} from 'react-native';
import {AyetOfferwall} from 'ayetsdk';
import {NavigationContainer} from '@react-navigation/native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { EarnStackParamList } from '../../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type EarnStackScreenProps = NativeStackScreenProps<EarnStackParamList, 'AyeT'>;

const AyetOfferwallScreen : React.FC<EarnStackScreenProps> = ({navigation}) => {
  const onClose = () => {
    const parentNavigator = navigation.getParent();
    if(parentNavigator){
      navigation.navigate('Games');
      parentNavigator.setOptions({headerShown: true})
    };
  };

  return <AyetOfferwall userId="12345" adslotId="15982" onClose={onClose} />
      
};

export default AyetOfferwallScreen;