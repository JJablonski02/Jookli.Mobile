import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SafeAreaView, View, StyleSheet } from "react-native";
import TextV from "../../components/global/Text";

import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "Analytics">;
const data=[
{value:50, label: 'M', frontColor: Colors.primary}, 
{value:30, label: 'T'}, 
{value:80, label: 'W'}, 
{value:70, label: 'T'},
{value:60, label: 'F'},
{value:50, label: 'S'},
{value:40, label: 'S'} ]

const defaultColor = 'lightgray';
const selectedColumnColor = Colors.primary;

const AnalyticsScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [selectedColumn, setSelectedColumn] = useState(0);
  const handleOnSelectedColumn = (data : []) => {

  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.viewContainer}>
        <TextV style={styles.sectionContainer}>Overview</TextV>
        <View>

        <BarChart barWidth={22} 
        noOfSections={3} 
        barBorderRadius={3} 
        frontColor="lightgray"
        color={selectedColumnColor}
        yAxisThickness={0}
        xAxisThickness={0}
        isAnimated
        data={data}
        onPress={(data : []) => handleOnSelectedColumn(data)}/>
      </View>
      </View>
      <View style={styles.viewContainer}>
        <TextV style={styles.sectionContainer}>Details</TextV>
        <TextV>Value: {selectedColumn}</TextV>
      </View>

    </SafeAreaView>
  );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: Colors.backgroundGreen,
  },
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
sectionContainer:{
  fontSize: FontSize.large,
  fontFamily: 'PoppinsRegular',
},
})
