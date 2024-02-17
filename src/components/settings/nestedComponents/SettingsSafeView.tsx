import { View, ViewProps, StyleSheet } from "react-native";
import Spacing from "../../../constants/Spacing";

export const SettingsSafeView : React.FC<ViewProps> = ({ children, ...otherProps }) => {
    return(
        <View {...otherProps} style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    marginTop: Spacing * 2,
    marginHorizontal: Spacing * 3,
    marginBottom: Spacing * 8,
    }
});