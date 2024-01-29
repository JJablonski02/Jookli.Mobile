import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SafeAreaView, Text, View, ScrollView, StyleSheet, Image } from "react-native";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import Spacing from "../../constants/Spacing";
import { ProgressBar } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "Payments">;

const PaymentsScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerStyleContainer}>Your earnings</Text>
          <Text style={styles.subHeaderContainer}>$0.00</Text>
          <ProgressBar color={Colors.active} progress={1} theme={{colors: {primary: 'blue'}}}/>
          <Text>You've reached 0% of payment threshold</Text>
          <Text>Payment threshold: $10.00</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.taskLabelContainer}>Transactions</Text>
          <Text style= {styles.taskDescriptionContainer}>You haven't received any payments yet to view your transaction history</Text>
        </View>
        <View style={styles.container}>
        <Text style={styles.taskLabelContainer}>How you get payment</Text>
          <View style={styles.horizontalContainer}>
          <Image style={{width: 150, height: 150,}} source={require('../../../assets/images/Payment.jpg')}/>
          <View style={{flex: 1,}}/>
          <Text style={{maxWidth: 200, verticalAlign: 'top', alignSelf: 'stretch', marginTop: 20}}>You don't need to add a payment method until you reach your payment threshold</Text>
          </View>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentsScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundGreen,
  },
  headerContainer: {
    alignItems: 'center',
    margin: Spacing * 2,
  },
  headerStyleContainer:{
    fontFamily: 'PoppinsBold',
    fontSize: FontSize.large,
  },
  subHeaderContainer: {
    fontFamily: 'PoppinsRegular',
    fontSize: FontSize.large,
    marginTop: Spacing * 3,
  },
  container:{
    backgroundColor: 'white',
    borderRadius: 5,
    padding: Spacing,
    margin: Spacing,
    alignItems: 'center',
  },
  horizontalContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing,
  },
  taskLabelContainer:{
    fontFamily: 'PoppinsBold',
    fontSize: FontSize.medium,
    alignSelf: 'flex-start',
  },
  taskDescriptionContainer:{
    fontFamily: 'PoppinsRegular',
    fontSize: FontSize.small,
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing,
  },
  progressContainer:{
    width: '100%',
    height: 20,
    marginTop: Spacing,
    color: Colors.backgroundGreen,
  }
});
