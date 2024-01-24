import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SafeAreaView, Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Payments">;

const PaymentsScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Payments Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default PaymentsScreen;
