import {Platform, StatusBar, SafeAreaView, ViewStyle} from "react-native";
import React from "react";

interface CustomSafeAreaViewProps{
    children?: React.ReactNode;
    style?: ViewStyle;
};


const CustomSafeAreaView: React.FC<CustomSafeAreaViewProps> = ({ children, style }) => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          ...(style || {}),
        }}
      >
        {children}
      </SafeAreaView>
    );
  };
  
  export default CustomSafeAreaView;

