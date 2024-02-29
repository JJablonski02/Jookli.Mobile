import { useEffect } from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EarnStackParamList } from "../../../types";

// const options = {
//     sdkKeyIos: "12345",
//     sdkKeyAndroid: "12345",
//     gcmSenderIdAndroid: "12345",
//     debug: true
// };

// const [
//     {
//     tapjoyEvents
//     },
//     {
//         initialiseTapjoy,
//         listenToEvent,
//         addTapjoyPlacement,
//         showTapjoyPlacement,
//         requestTapjoyPlacementContent,
//         isTapjoyConnected,
//         tapjoyListenForEarnedCurrency,
//         getTapjoyCurrencyBalance,
//         setTapjoyUserId,
//         spendTapjoyCurrency,
//     }
// ] = useTapjoy(options);

// useEffect(() => {
//     try{
//         const initialized = initialiseTapjoy();
//     }catch(e){
//         console.log("Error initializing Tapjoy: ", e);
//     }
// }, []);
type EarnStackScreenProps = NativeStackScreenProps<EarnStackParamList, 'Tapjoy'>;

const TapjoyOfferwallScreen : React.FC<EarnStackScreenProps> = ({navigation}) => {

    // useEffect(() => {
    //      Tapjoy.connect("12345", "1235");
    // }, []);

    return (
        <View>
            {/* <TJOfferwallDiscoverView
                style={{ flex: 1 }}
                onContentReady={() => {
                    console.log("Offerwall ready");
                }}
                onContentError={() => {
                    console.log("Offerwall error");
                }}
                onRequestFailure={() => {
                    console.log("Offerwall failure");
                }}
                onRequestSuccess={() => {
                    console.log("Offerwall success");
                }}
            /> */}
        </View>
    )
};

export default TapjoyOfferwallScreen;
