import { DefaultTheme, NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import RecoverPasswordScreen from "../screens/auth/RecoverPasswordScreen";
import HomeScreen from "../screens/root/HomeScreen";
import PersonalDataScreen from "../screens/auth/PersonalDataScreen";
import { EarnStackParamList, RootStackParamList } from "../types";
import { AuthContext, AuthContextProps } from "../context/AuthContext";
import MainPageScreen from "../screens/root/MainPage";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import SettingsScreen from "../screens/root/SettingsScreen";
import EarnScreen from "../screens/root/EarnScreen";
import AnalyticsScreen from "../screens/root/AnalyticsScreen";
import PaymentsScreen from "../screens/root/PaymentsScreen";
import { TouchableOpacity, } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CustomDrawer from "../components/CustomDrawer";
import GamesScreen from "../screens/earn/GamesScreen";


const Drawer = createDrawerNavigator<RootStackParamList>(); 
const Stack = createNativeStackNavigator<RootStackParamList>();
const EarnStack = createNativeStackNavigator<EarnStackParamList>();

interface InnerNavigationProps {
  handleSignOut: () => void;
};

export const Navigation = () => {
  const contextValue: AuthContextProps | undefined = React.useContext(AuthContext);
  
  if(contextValue == undefined){
    console.log("Undefinied context value from index.tsx");
  } 
  const handleSignOut = () => {
    contextValue?.logout();
    contextValue.userInfo.access_token = '';
  }
return (
  <NavigationContainer>
    <Stack.Navigator>
      {contextValue?.splashLoading ? (
          <Stack.Screen
          name='MainPage'
          component={MainPageScreen}
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
          headerShown: false
        }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name='Login' component={LoginScreen}/>
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
  const handleHeader = () => {

  };

  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} handleSignOut={handleSignOut}/> }
     screenOptions={{
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
    }}>
      <Drawer.Screen name="Home" component={HomeScreen} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="home-outline" size={24} color={color}/>
        ),
        title: 'Main Page',
      }}/>
      <Drawer.Screen name="Earn" component={EarnScreen}
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
        title: 'Payments'
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
      <EarnStack.Navigator screenOptions={{headerShown: false}}>
        <EarnStack.Screen name="Games" component={GamesScreen}/>
        <EarnStack.Screen name="Surveys" component={HomeScreen}/>
        <EarnStack.Screen name="Movies" component={HomeScreen}/>
        <EarnStack.Screen name="Shopping" component={HomeScreen}/>
        <EarnStack.Screen name="MicroTasks" component={HomeScreen}/>
      </EarnStack.Navigator>
  )
};


