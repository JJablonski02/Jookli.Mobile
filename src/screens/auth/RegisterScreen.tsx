import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Spacing from "../../constants/Spacing";
  import FontSize from "../../constants/FontSize";
  import Colors from "../../constants/Colors";
  import Font from "../../constants/Font";
  import { Ionicons } from "@expo/vector-icons";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../../types";
  import AppTextInput from "../../components/AppTextInput";
  import { RegisterUserDTO } from "@api";
  
  type Props = NativeStackScreenProps<RootStackParamList, "Register">;
  
  const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    const [user, setUser] = React.useState<RegisterUserDTO>({
      email: "TEST",
      password: "TEST",
      confirmPassword: "TEST",
      firstName: "TEST",
      lastName: "TEST",
      gender: 1,
      registrationSource: 1,
      pushNotificationToken: true,
      isLocationAllowed: true,
    });
    return (
      <SafeAreaView>
        <View
          style={{
            padding: Spacing * 2,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xLarge,
                color: Colors.primary,
                fontFamily: "PoppinsBold",
                marginVertical: Spacing * 3,
              }}
            >
              Create account
            </Text>
            <Text
              style={{
                fontFamily: "PoppinsRegular",
                fontSize: FontSize.small,
                maxWidth: "80%",
                textAlign: "center",
              }}
            >
              Create an account so you can explore all the existing jobs
            </Text>
          </View>
          <View
            style={{
              marginVertical: Spacing * 3,
            }}
          >
            <AppTextInput 
            placeholder="Email" 
            onChangeText={text => setUser(prevUser => ({ ...prevUser, email: text }))} />
            <AppTextInput    
            placeholder="Password" 
            secureTextEntry={true} 
            onChangeText={text => user?.password == text}/>
            <AppTextInput 
            placeholder="Confirm Password" 
            secureTextEntry={true} 
            onChangeText={text => user?.confirmPassword == text}/>
          </View>
  
          <TouchableOpacity
          onPress={() => navigate('PersonalData', {user: user})}
            style={{
              padding: Spacing * 2,
              backgroundColor: Colors.primary,
              marginVertical: Spacing * 3,
              borderRadius: Spacing,
              shadowColor: Colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsBold",
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
              }}
            >
              Move on
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Login")}
            style={{
              padding: Spacing,
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsSemiBold",
                color: Colors.text,
                textAlign: "center",
                fontSize: FontSize.small,
              }}
            >
              Already have an account
            </Text>
          </TouchableOpacity>
  
          <View
            style={{
              marginVertical: Spacing * 3,
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsSemiBold",
                color: Colors.primary,
                textAlign: "center",
                fontSize: FontSize.small,
              }}
            >
              Or continue with
            </Text>
  
            <View
              style={{
                marginTop: Spacing,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}
              >
                <Ionicons
                  name="logo-google"
                  color={Colors.text}
                  size={Spacing * 2}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}
              >
                <Ionicons
                  name="logo-apple"
                  color={Colors.text}
                  size={Spacing * 2}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}
              >
                <Ionicons
                  name="logo-facebook"
                  color={Colors.text}
                  size={Spacing * 2}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default RegisterScreen;
  