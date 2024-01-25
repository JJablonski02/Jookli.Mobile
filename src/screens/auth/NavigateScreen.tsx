import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SafeAreaView, Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Navigate">;

const NavigateScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Navigate screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default NavigateScreen;
