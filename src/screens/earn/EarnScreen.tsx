import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EarnStackParamList } from "../../types";
import { SafeAreaView, ScrollView, View, StyleSheet, Image } from "react-native";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import EarnButton from "../../components/EarnButton";
import Colors from "../../constants/Colors";
import TextV from "../../components/global/Text";
import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import { useEffect } from "react";

type Props = NativeStackScreenProps<EarnStackParamList, "Earn">;
interface EarnScreenProps {
  navigation: Props["navigation"];
  route: Props["route"];
  handleMove?: () => void;
};




const EarnScreen: React.FC<EarnScreenProps> = ({ navigation, handleMove }) => {
  const parentNavigator = navigation.getParent();

  const navigateToScreen = (text: keyof EarnStackParamList) => {
    if(parentNavigator){
       console.log('parent')
      parentNavigator.setOptions({
        headerShown: true,

        headerLeft: () => (
          <Ionicons name="arrow-back" size={30}
          color={Colors.primary}
          onPress={() => {
            navigation.goBack();
            parentNavigator.setOptions({
              headerLeft: undefined,
              headerTintColor: Colors.primary,
            });
          }}
          underlayColor='transparent'
          style={{ marginLeft: 10 }}
          />
        ),
      })
      navigation.navigate(text)
    }
  };

  
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <TextV style={styles.headerStyleContainer}>Choose your earning method</TextV>
          <TextV style={styles.subHeaderContainer}>100 Points ~ $1.00</TextV>
        </View>
        <View style={styles.taskContainer}>
          <Image 
          style={{width: '100%', height: 100}}
          source={require('../../../assets/images/PlayGames.jpg')}/>
          <TextV style={styles.taskLabelContainer}>Play games</TextV>
          <EarnButton onPress={() => navigateToScreen('Games')}/>
        </View>
        <View style={styles.taskContainer}>
          <Image 
          style={{width: '100%', height: 100}}
          source={require('../../../assets/images/WatchMovie.jpg')}/>
          <TextV style={styles.taskLabelContainer}>Watch movies</TextV>
          <EarnButton onPress={() => navigateToScreen('Movies')}/>
        </View>
        <View style={styles.taskContainer}> 
          <Image 
          style={{width: '100%', height: 100}}
          source={require('../../../assets/images/CompleteSurvey.jpg')}/>
          <TextV style={styles.taskLabelContainer}>Complete the survey</TextV>
          <EarnButton onPress={() => navigateToScreen('Surveys')}/>
        </View>
        <View style={styles.taskContainer}>
          <Image 
          style={{width: '100%', height: 100}}
          source={require('../../../assets/images/OnlineShopping.jpg')}/>
          <TextV style={styles.taskLabelContainer}>Online shopping</TextV>
          <EarnButton onPress={() => navigateToScreen('Shopping')}/>
        </View>
        <View style={styles.taskContainer}>
          <Image 
          style={{width: '100%', height: 100}}
          source={require('../../../assets/images/MicroTasks.jpg')}/>
          <TextV style={styles.taskLabelContainer}>Microtasks</TextV>
          <EarnButton onPress={() => navigateToScreen('MicroTasks')}/>
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