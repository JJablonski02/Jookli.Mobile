import { DefaultTheme, NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react, {useEffect, useContext} from "react";
import Colors from "../constants/Colors";
import SignInScreen from "../screens/auth/SignInScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import RecoverPasswordScreen from "../screens/auth/RecoverPasswordScreen";
import HomeScreen from "../screens/root/HomeScreen";
import PersonalDataScreen from "../screens/auth/PersonalDataScreen";
import { EarnStackParamList, RootStackParamList } from "../types";
import { AuthContext, AuthContextProps } from "../context/AuthContext";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import SettingsScreen from "../screens/root/SettingsScreen";
import EarnScreen from "../screens/earn/EarnScreen";
import AnalyticsScreen from "../screens/root/AnalyticsScreen";
import PaymentsScreen from "../screens/root/PaymentsScreen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from "../components/CustomDrawer";
import GamesScreen from "../screens/earn/GamesScreen";
import SplashLoadingScreen from "../screens/root/SplashLoadingScreen";
import {Header} from '@react-navigation/elements'
import SurveyScreen from "../screens/earn/SurveyScreen";
import MoviesScreen from "../screens/earn/MoviesScreen";
import ShoppingScreen from "../screens/earn/ShoppingScreen";
import MicroTasksScreen from "../screens/earn/MicroTasksScreen";
import AyetOfferwallScreen from "../screens/earn/offerwalls/AyeTOfferwallScreen";
import FyberOfferwallScreen from "../screens/earn/offerwalls/FyberOfferwallScreen";
import TapjoyOfferwallScreen from "../screens/earn/offerwalls/TapJoyOfferwallScreen";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";



const Drawer = createDrawerNavigator<RootStackParamList>(); 
const Stack = createNativeStackNavigator<RootStackParamList>();
const EarnStack = createNativeStackNavigator<EarnStackParamList>();

interface InnerNavigationProps {
  handleSignOut: () => void;
};

export const Navigation = () => {
  const contextValue: AuthContextProps | undefined = useContext(AuthContext);
  const splashLoading : boolean = useSelector((state: RootState) => state.appState.splashLoading);

  if(contextValue == undefined){
    console.log("Undefinied context value from index.tsx");
  } 
  const handleSignOut = async () => {
    contextValue?.logout();
    contextValue.userInfo.access_token = '';
  }

return (
  <NavigationContainer>
    <Stack.Navigator>
      {contextValue?.splashLoading ? (
          <Stack.Screen
          name='SplashLoading'
          component={SplashLoadingScreen}
          options={{headerShown: false}}
        />
      ) : contextValue?.userInfo.access_token ? (
        <Stack.Group screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Navigate"
          options={{title: "InnerNavigation"}}>
            {() => <InnerNavigation handleSignOut={handleSignOut} />}
          </Stack.Screen>
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name='SignIn' component={SignInScreen}/>
          <Stack.Screen name="Register"component={RegisterScreen}/>
          <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen}/>
          <Stack.Screen name="PersonalData" component={PersonalDataScreen}/>
        </Stack.Group>
      )}
    </Stack.Navigator>
  </NavigationContainer>
);
};


const InnerNavigation : React.FC<InnerNavigationProps> = ({handleSignOut}) => {

  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} handleSignOut={handleSignOut}/> }
     screenOptions={{
      drawerIcon: ({ focused, color, size }) => (
        <Ionicons name='cash' size={24} color={'black'} />
      ),
      headerTintColor: Colors.primary,
      headerShown: true,
      headerStyle:{
        borderRadius: 20,
      },
      drawerStyle:{
        borderTopRightRadius: 50,
        borderBottomRightRadius: 20,
      },
      drawerLabelStyle: {
        fontSize: 20,
        fontWeight: "bold",
      },
      drawerActiveBackgroundColor: Colors.primary,
      drawerActiveTintColor: Colors.onPrimary,
      drawerInactiveTintColor: Colors.primary,
      drawerAllowFontScaling: false,
    }}>
      <Drawer.Screen name="Home" component={HomeScreen} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="home-outline" size={24} color={color}/>
        ),
        title: 'Main Page',
      }}/>
      <Drawer.Screen name='EarnNavigator' component={EarnNavigator}
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="cash-outline" size={24} color={color}/>
        ),
        title: 'Earn',
      }}/>
      <Drawer.Screen name="Analytics" component={AnalyticsScreen}
      options ={{
        drawerIcon: ({color}) => (
          <Ionicons name="analytics-outline" size={24} color={color}/>
        ),
        title: 'Analytics'
      }} />
      <Drawer.Screen name="Payments" component={PaymentsScreen} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="wallet-outline" size={24} color={color}/>
        ),
        title: 'Payments',
      }}/>
      <Drawer.Screen name="Settings" component={SettingsScreen} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="settings-outline" size={24} color={color}/>
        ),
        title: 'Settings'
      }}/>
    </Drawer.Navigator>
  )
};

const EarnNavigator : React.FC = () => {
  return(
      <EarnStack.Navigator
       initialRouteName="Earn"
        screenOptions={{headerShown: false}}>
        <EarnStack.Screen name="Earn" component={EarnScreen} />
        <EarnStack.Screen name="Games" component={GamesScreen}/>
        <EarnStack.Screen name="Surveys" component={SurveyScreen}/>
        <EarnStack.Screen name="Movies" component={MoviesScreen}/>
        <EarnStack.Screen name="Shopping" component={ShoppingScreen}/>
        <EarnStack.Screen name="MicroTasks" component={MicroTasksScreen}/>
        <EarnStack.Screen name="AyeT" component={AyetOfferwallScreen}/>
        <EarnStack.Screen name="Fyber" component={FyberOfferwallScreen}/>
        <EarnStack.Screen name="Tapjoy" component={TapjoyOfferwallScreen}/>
      </EarnStack.Navigator>
  )
};


