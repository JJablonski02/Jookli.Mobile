import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { StyleSheet, Image } from "react-native";
import AppLoading from "expo-app-loading";
import CustomSafeAreaView from "../../components/SafeViewAndroid";
import { ActivityIndicator } from "react-native-paper";
import Colors from "../../constants/Colors";
import TextV from "../../components/global/Text";

type Props = NativeStackScreenProps<RootStackParamList, 'SplashLoading'>;

const SplashLoadingScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
        <CustomSafeAreaView style={styles.container}>
            <Image src="../../assets/images/JoyProfits_Welcome.png" width={60} height={60} />
            <TextV>Loading...</TextV>
            <ActivityIndicator size={'large'} color={Colors.primary}/>
        </CustomSafeAreaView>
    );
}

export default SplashLoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});