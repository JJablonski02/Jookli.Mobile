import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/auth/LoginScreen";
import Welcome from "../screens/auth/WelcomeScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import RecoverPasswordScreen from "../screens/auth/RecoverPasswordScreen";
import HomeScreen from "../screens/auth/HomeScreen";
import PersonalDataScreen from "../screens/auth/PersonalDataScreen";
import ConfirmAccountScreen from "../screens/auth/ConfirmAccountScreen";
import MainPage from "../screens/root/MainPage";

import { RootStackParamList } from "../types";
import { AuthContext, AuthContextProps } from "../context/AuthContext";
import MainPageScreen from "../screens/root/MainPage";
import WelcomeScreen from "../screens/auth/WelcomeScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

// export default function Navigation() {
//   return (
//     <NavigationContainer theme={theme}>
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  const contextValue: AuthContextProps | undefined = React.useContext(AuthContext)
  if(contextValue == undefined){
    console.log("Undefinied context value from index.tsx");
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
        <Stack.Screen name="Home" component={HomeScreen} />
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

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
// const AuthStack = createNativeStackNavigator<RootStackParamList>();
// function RootNavigator() {
//   const [isAuthenticated, setIsAuthenticated] = React.useState(false);
//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true);
//   }
//   return (
//     <NavigationContainer></NavigationContainer>
//     <NavigationContainer>
//       <Stack.Navigator>
//         {isAuthenticated ? (
//           //Logged users
//           <Stack.Group
//             screenOptions={{
//               headerShown: true,
//             }}
//           >
//             <Stack.Screen name="MainPage" component={MainPage} />
//           </Stack.Group>
//         ) : (
//            //Auth screens
//           <Stack.Group
//             screenOptions={{
//               headerShown: false,
//             }}
//           >
//             <Stack.Screen name="Welcome" component={Welcome}/>
//             <Stack.Screen name="Login" component={LoginScreen}/>
//             <Stack.Screen name="Register" component={RegisterScreen} />
//             <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="PersonalData" component={PersonalDataScreen} />
//             <Stack.Screen name="ConfirmAccount" component={ConfirmAccountScreen} />
//           </Stack.Group>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
