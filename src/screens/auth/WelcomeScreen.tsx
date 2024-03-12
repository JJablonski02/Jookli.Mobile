import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import {
  RegularButtonBig,
  RegularButtonSmall,
} from "../../components/RegularButton";
import { SafeView } from "../../components/global/SafeView";
import { useTranslation } from "react-i18next";
import { withTranslation } from 'react-i18next';

const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  
  return (
    <SafeView>
      <ImageBackground
        style={styles.image}
        resizeMode="contain"
        source={require("../../../assets/images/JoyProfits_Welcome.png")}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerBigLabel}>Make profits having fun</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={styles.twoButtonsContainer}>
          <RegularButtonBig label="Sign In" onPress={() => navigate("Login")} />
          <Text>Do not have an account ?</Text>
          <RegularButtonBig
            label="Register"
            onPress={() => navigate("Register")}
          />
        </View>
        </View>
    </SafeView>
  );
};

export default withTranslation()(WelcomeScreen);

const styles = StyleSheet.create({
  image: {
    height: height / 2,
    marginTop: 50,
  },
  headerContainer: {
    paddingHorizontal: Spacing * 3,
  },
  headerBigLabel: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: "PoppinsBold",
    textAlign: "center",
  },
  headerSmallLabel: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: "PoppinsRegular",
    textAlign: "center",
    marginTop: Spacing * 2,
  },
  twoButtonsContainer: {
    paddingTop: Spacing,
    alignItems: 'center',
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
  },
});
