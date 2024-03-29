import React from "react";
import { View, TouchableOpacity, ImageBackground, Image, Dimensions } from "react-native";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "../constants/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import TextV from "./global/Text";

interface CustomDrawerProps {
    navigation: DrawerContentComponentProps["navigation"];
    state: DrawerContentComponentProps["state"];
    descriptors: DrawerContentComponentProps["descriptors"];
    handleSignOut: () => void;
}
type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {
const state = props.state;
const navigation = props.navigation;
const descriptors = props.descriptors;

    return(
        <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...{props}}
        contentContainerStyle={{backgroundColor: '#fff'}}>
        <ImageBackground
          source={require('../../assets/images/JoyProfits_Register.png')}
          style={{padding: 10}}>
          <Image
            source={require('../../assets/images/bitmoji.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
            resizeMode="contain"
          />
          <TextV
            style={{
              color: '#000',
              fontSize: 18,
              fontFamily: 'PoppinsRegular',
              marginBottom: 5,
            }}>
            John Doe
          </TextV>
          <View style={{flexDirection: 'row'}}>
            <TextV
              style={{
                color: '#000',
                fontFamily: 'PoppinsRegular',
                marginRight: 5,
              }}>
              280 Coins
            </TextV>
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
        </View>
        <DrawerItemList {...{state,navigation,descriptors}} />
        </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <TextV
              style={{
                fontSize: 15,
                fontFamily: 'PoppinsRegular',
                marginLeft: 5,
              }}>
              Tell a Friend
            </TextV>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.handleSignOut}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <TextV
              style={{
                fontSize: 15,
                fontFamily: 'PoppinsRegular',
                marginLeft: 5,
              }}>
              Sign Out
            </TextV>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    )
};

export default CustomDrawer;