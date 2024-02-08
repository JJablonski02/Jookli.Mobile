import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SafeAreaView, View, Text } from "react-native";


const GamesScreen: React.FC = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>Games Screen</Text>
            </View>
        </SafeAreaView>
    );
}

export default GamesScreen;