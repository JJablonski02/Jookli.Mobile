import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    SectionList
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

type AuthProps = NativeStackScreenProps<RootStackParamList, "Home">;

interface EstimatedEarningsDTO {
  today: number;
  yesterday: number;
  week: number;
  month: number;
};

const HomeScreen: React.FC = () => {

  const [apiResponse, setApiResponse] = useState<EstimatedEarningsDTO | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get<EstimatedEarningsDTO>('http://localhost:8080/api/payments/balance', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setApiResponse(response.data);
      } catch (error) {
        console.error('Błąd pobierania danych z API', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
    <View style={styles.viewContainer}>
      <Text style={styles.sectionContainer}>
        Estimated Earnings
      </Text>
      
      <Text style={styles.namesContainer}>
        Today:
      </Text>
      <Text style={styles.valuesContainer}>
          $0.00
      </Text>
      <Text style={styles.namesContainer}>
        Yesterday: 
      </Text>
      <Text style={styles.valuesContainer}>
          $0.00
      </Text>
      <Text style={styles.compareContainer}>
        <Ionicons name='caret-forward' size={10} color="black" />
        $0.00 (+0.00%)
      </Text>
      <Text style={styles.compareContainer}>
        and the same day last week
      </Text>
      <Text style={styles.namesContainer}>
        Last 7 days: 
      </Text>
      <Text style={styles.valuesContainer}>
          $0.00
      </Text>
      <Text style={styles.compareContainer}>
        <Ionicons name='caret-forward' size={10} color="black" />
        $0.00 (+0.00%)
      </Text>
      <Text style={styles.compareContainer}>
          compared to the previous 7 days
      </Text>
      <Text style={styles.namesContainer}>
        This month: 
      </Text>
      <Text style={styles.valuesContainer}>
          $0.00
      </Text>
      <Text style={styles.compareContainer}>
        <Ionicons name='caret-forward' size={10} color="black" />
        $0.00 (+0.00%)
      </Text>
      <Text style={styles.compareContainer}>
          compared to the same period last year
      </Text>
    </View>
    <View style={styles.viewContainer}>
      <Text style={styles.sectionContainer}>
        Balance
      </Text>
      <Text style={styles.valuesContainer}>
        $0.00
      </Text>
      <Text style={styles.compareContainer}>
        Last payment
      </Text>
      <Text style={styles.compareContainer}>
        $0.00
      </Text>
    </View>
    <VerifyEmail/>
    </ScrollView>
    </SafeAreaView>
  );
};

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
