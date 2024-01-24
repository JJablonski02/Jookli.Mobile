import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SafeAreaView } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, 'MainPage'>;

const MainPageScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
        <SafeAreaView>

        </SafeAreaView>
    );
}

export default MainPageScreen;