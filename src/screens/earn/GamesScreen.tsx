import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SafeAreaView, View } from "react-native";
import TextV from "../../components/global/Text";


const GamesScreen: React.FC = () => {
    return (
        <SafeAreaView>
            <View>
                <TextV>Games Screen</TextV>
            </View>
        </SafeAreaView>
    );
}

export default GamesScreen;