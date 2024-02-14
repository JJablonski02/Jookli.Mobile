import { ViewProps, View, StyleSheet, Platform } from "react-native";
import Spacing from "../constants/Spacing";

export const SafeView: React.FC<ViewProps> = ({children, ...otherProps}) => {
  return (
    <View style={Platform.OS === 'ios' ? styles.iosContainer : styles.androidContainer} {...otherProps}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
    iosContainer:{
        paddingTop: Spacing * 2, 
        paddingBottom: Spacing * 5, 
        paddingHorizontal: Spacing * 3, 
        flex: 1
    },
    androidContainer:{
        paddingTop: Spacing * 2, 
        paddingBottom: Spacing * 3, 
        paddingHorizontal: Spacing * 3, 
        flex: 1
    }
});