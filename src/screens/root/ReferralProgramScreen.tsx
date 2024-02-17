import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SafeAreaView, View } from "react-native";
import TextV from "../../components/global/Text";

type Props = NativeStackScreenProps<RootStackParamList, "ReferralProgram">;

const ReferralProgramScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View>
        <TextV>Referral Program Screen</TextV>
      </View>
    </SafeAreaView>
  );
};

export default ReferralProgramScreen;
