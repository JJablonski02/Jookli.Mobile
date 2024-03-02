import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EarnStackParamList, RootStackParamList } from "../../types";
import { SafeAreaView, View, StyleSheet, Image, BackHandler } from "react-native";
import TextV from "../../components/global/Text";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import PlayGamesButton from "../../components/games/PlayGamesButton";
import { moderateScale } from "../../constants/FontSize";
import { useEffect } from "react";

type EarnStackScreenProps = NativeStackScreenProps<EarnStackParamList, 'Games'>;

const GamesScreen: React.FC<EarnStackScreenProps> = () => {
    const navigation = useNavigation().getParent();

    const handleOnPress = (screenName: keyof EarnStackParamList) => {
        if(navigation){
            console.log("Navigating to {screenName}")
            navigation.getParent()?.setOptions({
                headerShown: false
            })
            navigation.setOptions({headerShown: false})
            navigation.navigate(screenName);
        }
    }
    

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
            <View style={styles.viewContainer}>
            <Image source={require('../../../assets/images/Tapjoy_Logo.png')} style={styles.logo}/>
            <PlayGamesButton onPress={() => handleOnPress('Tapjoy')}/>
            </View>
            <View style={styles.viewContainer}>
            <Image source={require('../../../assets/images/AyeT_Dark_Logo.png')} style={styles.logo}/>
            <PlayGamesButton onPress={() => handleOnPress('AyeT')}/>
            </View>
            <View style={styles.viewContainer}>
            <Image source={require('../../../assets/images/Fyber_Logo.png')} style={styles.logo}/>
            <PlayGamesButton onPress={() => handleOnPress('Fyber')}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default GamesScreen;

const styles = StyleSheet.create({
    viewContainer:{
        backgroundColor: 'white',
        borderRadius: 5,
        padding: Spacing,
        margin: Spacing,
        alignItems: 'center',
    },
    safeArea:{
      flex: 1,
      backgroundColor: Colors.backgroundGreen,
    },
    logo: {
        alignSelf:'center',
        width: "40%",
        height: moderateScale(100),
        resizeMode: 'contain',
    },
})