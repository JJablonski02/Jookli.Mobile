import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EarnStackParamList, RootStackParamList } from "../../types";
import { SafeAreaView, View } from "react-native";
import TextV from "../../components/global/Text";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";

type EarnStackScreenProps = NativeStackScreenProps<EarnStackParamList, 'Surveys'>;

const SurveyScreen: React.FC<EarnStackScreenProps> = () => {
    const navigation = useNavigation().getParent();

    const handleOnPress = () => {
         navigation?.setOptions({
            headerShown: true
         })
    }

    return (
        <SafeAreaView>
            <View>
            <TouchableOpacity onPress={handleOnPress}>
                <TextV style={{justifyContent: 'center', alignSelf: 'center', }}>Survey</TextV>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default SurveyScreen;