import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    SectionList,
    RefreshControl
  } from "react-native";
  import React, {useState, useEffect}  from "react";
  import Spacing from "../../constants/Spacing";
  import FontSize from "../../constants/FontSize";
  import Colors from "../../constants/Colors";
  import Font from "../../constants/Font";
  import { Ionicons } from "@expo/vector-icons";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../../types";
  import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import VerifyEmail from "../../components/VerifyEmail";
import SelfAdditionalInformations from "../../components/SelfAdditionalInformations";
import { useNavigation } from "@react-navigation/native";
import TextV from "../../components/global/Text";
import { REACT_APP_API_URL } from "@env";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setLoading } from "../../redux/store/store";
import { ActivityIndicator } from "react-native";
import { Loader } from "../../components/global/Loader";

type AuthProps = NativeStackScreenProps<RootStackParamList, "Home">;

interface EstimatedEarningsDTO {
  accountStatus: number;
  todayEarnings: number;
  yesterdayEarnings: number;
  last7DaysEarnings: number;
  thisMonthEarnings: number;
  balance: number;
};

const HomeScreen: React.FC = () => {
  const {isLoading} = useSelector((state : RootState) => state.appState);
  const dispatch = useDispatch();
  const [setToday, today] = useState<string>("");

  const [apiResponse, setApiResponse] = useState<EstimatedEarningsDTO>();

  const [refreshing, setRefreshing] = React.useState(false);


  const fetchData = async () => {
    try {
      if(!refreshing){
        dispatch(setLoading(true));
        console.log(refreshing);
      }

      const userInfoString = await AsyncStorage.getItem('userInfo');
      const userInfo = JSON.parse(userInfoString || '{}');
      const token = userInfo.access_token;

      const response = await axios.get<EstimatedEarningsDTO>('/api/details/mainPage', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setApiResponse(response.data);
      const todayEarnings = response.data.todayEarnings;

    } catch (error) {
      console.error('Błąd pobierania danych z API', error);
    } finally {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 2000)
    }
  };
 
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await fetchData();
    setTimeout(() => {
    }, 2000);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>       
      <View style={styles.viewContainer}>
        <TextV style={styles.sectionContainer}>
          Estimated Earnings
        </TextV>
        <TextV style={styles.namesContainer}>
          Today:
        </TextV>
        <TextV style={styles.valuesContainer}>
            ${apiResponse?.todayEarnings}
        </TextV>
        <TextV style={styles.namesContainer}>
          Yesterday: 
        </TextV>
        <TextV style={styles.valuesContainer}>
            ${apiResponse?.yesterdayEarnings}
        </TextV>
        <TextV style={styles.compareContainer}>
          <Ionicons name='caret-forward' size={10} color="black" />
          $0.00 (+0.00%)
        </TextV>
        <TextV style={styles.compareContainer}>
          and the same day last week
        </TextV>
        <TextV style={styles.namesContainer}>
          Last 7 days: 
        </TextV>
        <TextV style={styles.valuesContainer}>
            ${apiResponse?.last7DaysEarnings}
        </TextV>
        <TextV style={styles.compareContainer}>
          <Ionicons name='caret-forward' size={10} color="black" />
          $0.00 (+0.00%)
        </TextV>
        <TextV style={styles.compareContainer}>
            compared to the previous 7 days
        </TextV>
        <TextV style={styles.namesContainer}>
          This month: 
        </TextV>
        <TextV style={styles.valuesContainer}>
            ${apiResponse?.thisMonthEarnings}
        </TextV>
        <TextV style={styles.compareContainer}>
          <Ionicons name='caret-forward' size={10} color="black" />
          $0.00 (+0.00%)
        </TextV>
        <TextV style={styles.compareContainer}>
            compared to the same period last year
        </TextV>
      </View>
      <View style={styles.viewContainer}>
        <TextV style={styles.sectionContainer}>
          Balance
        </TextV>
        <TextV style={styles.valuesContainer}>
          ${apiResponse?.balance}
        </TextV>
        <TextV style={styles.compareContainer}>
          Last payment
        </TextV>
        <TextV style={styles.compareContainer}>
          $0.00
        </TextV>
      </View>
      <VerifyEmail/>
      <SelfAdditionalInformations/> 
      </ScrollView>
      {(isLoading || !apiResponse) ?  
            <Loader/>
             : null}
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  viewContainer:{
      marginLeft: Spacing / 2,
      marginRight: Spacing / 2,
      marginTop: Spacing,
      paddingBottom: Spacing * 2,
      backgroundColor: 'white',
      borderRadius: 5,
      paddingLeft: Spacing,
      paddingTop: Spacing,
  },
  safeArea:{
    flex: 1,
    backgroundColor: Colors.backgroundGreen,
  },
  sectionContainer:{
    fontSize: FontSize.large,
    fontFamily: 'PoppinsRegular',
  },
  namesContainer:{
    fontFamily: 'PoppinsRegular',
    fontSize: FontSize.small,
    marginTop: Spacing,
  },
  valuesContainer:{
    fontFamily: 'PoppinsRegular',
    fontSize: FontSize.medium,
  },
  compareContainer:{
    fontFamily: 'PoppinsRegular',
    fontSize: FontSize.xSmall,
  },   
});

export default HomeScreen;
