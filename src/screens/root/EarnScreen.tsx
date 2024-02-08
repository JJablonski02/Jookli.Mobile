import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, EarnStackParamList } from "../../types";
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Image } from "react-native";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import EarnButton from "../../components/EarnButton";
import Colors from "../../constants/Colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GamesScreen from "../earn/GamesScreen";
import HomeScreen from "./HomeScreen";

type Props = NativeStackScreenProps<EarnStackParamList, "Earn">;
interface EarnScreenProps {
  navigation: Props["navigation"];
  route: Props["route"];
  handleMove?: () => void;
};

const EarnScreen: React.FC<EarnScreenProps> = ({ navigation, route, handleMove }) => {
  
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerStyleContainer}>Choose your earning method</Text>
          <Text style={styles.subHeaderContainer}>100 Points ~ $1.00</Text>
        </View>
        <View style={styles.taskContainer}>
          <Image 
          style={{width: '100%', height: 100}}
          source={require('../../../assets/images/PlayGames.jpg')}/>
          <Text style={styles.taskLabelContainer}>Play games</Text>
          <EarnButton navigation={navigation} route={route}/>
        </View>
        <View style={styles.taskContainer}>
          <Image 
          style={{width: '100%', height: 100}}
          source={require('../../../assets/images/WatchMovie.jpg')}/>
          <Text style={styles.taskLabelContainer}>Watch movies</Text>
          <EarnButton navigation={navigation} route={route}/>
        </View>
        <View style={styles.taskContainer}>
          <Image 
          style={{width: '100%', height: 100}}
          source={require('../../../assets/images/CompleteSurvey.jpg')}/>
          <Text style={styles.taskLabelContainer}>Complete the survey</Text>
          <EarnButton navigation={navigation} route={route}/>
        </View>
        <View style={styles.taskContainer}>
          <Image 
          style={{width: '100%', height: 100}}
          source={require('../../../assets/images/OnlineShopping.jpg')}/>
          <Text style={styles.taskLabelContainer}>Online shopping</Text>
          <EarnButton navigation={navigation} route={route}/>
        </View>
        <View style={styles.taskContainer}>
          <Image 
          style={{width: '100%', height: 100}}
          source={require('../../../assets/images/MicroTasks.jpg')}/>
          <Text style={styles.taskLabelContainer}>Microtasks</Text>
          <EarnButton navigation={navigation} route={route}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EarnScreen;

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
    fontFamily: 'PoppinsRegular',
    fontSize: FontSize.large,
  },
  subHeaderContainer: {
    fontFamily: 'PoppinsRegular',
    fontSize: FontSize.medium,
  },
  taskContainer:{
    backgroundColor: 'white',
    borderRadius: 5,
    padding: Spacing,
    margin: Spacing,
    alignItems: 'center',
  },
  taskLabelContainer:{
    fontFamily: 'PoppinsRegular',
    fontSize: FontSize.medium,
    marginTop: Spacing,
  },
});