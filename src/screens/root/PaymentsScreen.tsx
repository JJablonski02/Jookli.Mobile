import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Image,
  RefreshControl,
} from "react-native";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import Spacing from "../../constants/Spacing";
import { ProgressBar } from "react-native-paper";
import Paymentsbutton from "../../components/payments/PaymentsButton";
import TextV from "../../components/global/Text";
import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setLoading } from "../../redux/store/store";
import { Loader } from "../../components/global/Loader";
import * as SecureStore from 'expo-secure-store';

type Props = NativeStackScreenProps<RootStackParamList, "Payments">;

interface PaymentsScreenDTO {
  total : number;
  threshold : number;
  thresholdPercentage : number;
  ispaymentmethodadded : boolean;
  arepaymentsettingscomplete : boolean;
  transactions : [];
};

const PaymentsScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const {isLoading} = useSelector((state : RootState) => state.appState);
  const dispatch = useDispatch();
  const [apiResponse, setApiResponse] = useState<PaymentsScreenDTO>();
  const [refreshing, setRefreshing] = useState(false);


  const fetchData = async () => {
    try {
      const token = await SecureStore.getItemAsync('accessToken')
      const response = await axios.get<PaymentsScreenDTO>('/api/payments/paymentScreen', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setApiResponse(response.data); 
      console.log(response.data);
    } catch (error) {
      console.error('Błąd pobierania danych z API', error);
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }, []);
  
  useEffect(() => {
    dispatch(setLoading(true)); 
    fetchData();
    setTimeout(() => {dispatch(setLoading(false))}, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
        <View style={styles.container}>
          <TextV style={styles.headerStyleContainer}>Your earnings</TextV>
          <TextV style={styles.subHeaderContainer}>${apiResponse?.total}</TextV>
          <ProgressBar
            color={Colors.active}
            progress={1}
            theme={{ colors: { primary: "blue" } }}
          />
          <TextV>You've reached {apiResponse?.thresholdPercentage}% of payment threshold</TextV>
          <TextV>Payment threshold: ${apiResponse?.threshold}</TextV>
        </View>
        <View style={styles.container}>
          <TextV style={styles.taskLabelContainer}>Transactions</TextV>
          <TextV style={styles.taskDescriptionContainer}>
            You haven't received any payments yet to view your transaction
            history
          </TextV>
          <Paymentsbutton label="View transactions"/>
        </View>
        <View style={styles.container}>
          <TextV style={styles.taskLabelContainer}>How you get payment</TextV>
          <View style={styles.horizontalContainer}>
            <Image
              style={styles.paymentImageContainer}
              source={require("../../../assets/images/Payment.jpg")}
            />
              <TextV
              style={styles.paymentDescriptionContainer}>
              You don't need to add a payment method until you reach your
              payment threshold
            </TextV>
          </View>
          <Paymentsbutton label="Add payment method"/>
        </View>
        <View style={styles.container}>
          <TextV style={styles.taskLabelContainer}>Payment settings</TextV>
          <TextV style={styles.taskDescriptionContainer}>
            You have not added any personal data to transfers. Add them to get correct transfers.
          </TextV>
          <Paymentsbutton label="Manage payment settings"/>
        </View>
      </ScrollView>
      {(isLoading || !apiResponse) ?  
            <Loader/>
             : null}
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
    alignItems: "center",
    margin: Spacing * 2,
  },
  headerStyleContainer: {
    fontFamily: "PoppinsBold",
    fontSize: FontSize.large,
  },
  subHeaderContainer: {
    fontFamily: "PoppinsRegular",
    fontSize: FontSize.large,
    marginTop: Spacing * 3,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: Spacing,
    margin: Spacing,
    alignItems: "center",
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  paymentDescriptionContainer: {
    maxWidth: 150,
    marginLeft: Spacing * 3,
  },
  paymentImageContainer: {
    width: 150,
    height: 150,
  },
  taskLabelContainer: {
    fontFamily: "PoppinsBold",
    fontSize: FontSize.medium,
    alignSelf: "flex-start",
  },
  taskDescriptionContainer: {
    fontFamily: "PoppinsRegular",
    fontSize: FontSize.small,
    alignSelf: "flex-start",
    paddingHorizontal: Spacing,
  },
  progressContainer: {
    width: "100%",
    height: 20,
    marginTop: Spacing,
    color: Colors.backgroundGreen,
  },
});
