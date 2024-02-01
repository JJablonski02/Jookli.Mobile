import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import FontSize from '../constants/FontSize';
import Font from '../constants/Font';
import Spacing from '../constants/Spacing';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const SelfAdditionalInformations = () => {
  const navigation = useNavigation();

    return(
        <View style = {styles.viewContainer}>
            <Text style = {styles.sectionContainer}>
                Add basic information about yourself
            </Text>
            <Text style={styles.compareContainer}>
                Display better paying ads to earn money
            </Text>
            <Image
                source={require('../../assets/images/BasicInfo.jpg')}
                style={{
                    width: '102.5%',
                    height: 150,
                    marginHorizontal: -Spacing,          
                }}/>
            <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}>
                <Text style={styles.settingsContainer}>
                    Go to settings
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer:{
      marginLeft: Spacing / 2,
      marginRight: Spacing / 2,
      marginBottom: Spacing,
      paddingBottom: Spacing * 2,
      backgroundColor: 'white',
      borderRadius: 5,
      paddingLeft: Spacing,
      paddingTop: Spacing,
      fontFamily: 'PoppinsRegular',
  },
  sectionContainer:{
    fontSize: FontSize.medium,
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
  settingsContainer:{
    fontFamily: 'PoppinsRegular',
    fontSize: FontSize.medium,
    color: Colors.primary,
    marginTop: Spacing,
    marginLeft: Spacing,
  }
});

export default SelfAdditionalInformations;