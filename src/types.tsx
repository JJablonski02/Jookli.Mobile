import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {RegisterUserDTO} from "@api"

declare global{
    namespace ReactNavigation{
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
    PersonalData: {user: RegisterUserDTO};
    RecoverPassword: undefined;
    Home: undefined;
    Navigate: undefined;
    EarnNavigator: undefined;
    ConfirmAccount: undefined;
    SplashLoading: undefined;
    Analytics: undefined;
    Payments: undefined;
    ReferralProgram: undefined;
    Settings: undefined;
};

export type EarnStackParamList = {
    Earn: undefined;
    Games: undefined;
    Surveys: undefined;
    Movies: undefined;
    Shopping: undefined;
    MicroTasks: undefined;
    AyeT: undefined;
    Fyber: undefined;
    Tapjoy: undefined;
};

export type EarnStackScreenProps<Screen extends keyof EarnStackParamList> =
    NativeStackScreenProps<EarnStackParamList, Screen>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;
    

