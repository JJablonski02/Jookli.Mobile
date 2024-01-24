import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SafeAreaView, Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "ReferralProgram">;

const ReferralProgramScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Referral Program Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ReferralProgramScreen;
