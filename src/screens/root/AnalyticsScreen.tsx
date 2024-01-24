import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SafeAreaView, Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Analytics">;

const AnalyticsScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>AnalyticsScreen Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default AnalyticsScreen;
