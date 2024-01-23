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
    ConfirmAccount: undefined;
    MainPage: undefined;
    Earn: undefined;
    Analytics: undefined;
    Payments: undefined;
    ReferralProgram: undefined;
    Settings: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;
