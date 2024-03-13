import { ActivityIndicator, View, StyleSheet } from "react-native";
import Spacing from "../../constants/Spacing";

export const Loader : React.FC = () => {
    return (
        <View style={styles.loaderBackgroundContainer}>
            <ActivityIndicator size="large" style={styles.loaderContainer} />
        </View>
    )
}

const styles = StyleSheet.create({
    loaderBackgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    loaderContainer: {
        padding: Spacing * 1,
        backgroundColor: 'rgba(0,0,0, 0.05)',
        borderRadius: 5,
    },
})