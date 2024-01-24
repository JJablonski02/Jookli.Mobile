import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SafeAreaView, Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Earn">;

const EarnScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Earn Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default EarnScreen;
