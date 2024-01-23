import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
  } from "react-native";
  import React, {useContext, useState} from 'react';
  import Spacing from "../../constants/Spacing";
  import FontSize from "../../constants/FontSize";
  import Colors from "../../constants/Colors";
  import Font from "../../constants/Font";
  import { Ionicons } from "@expo/vector-icons";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../../types";
  import AppTextInput from "../../components/AppTextInput";
  import { AuthContext } from "../../context/AuthContext";
  
  type Props = NativeStackScreenProps<RootStackParamList, "Login">;
  
  
  
  const LoginScreen: React.FC<Props> = ({ navigation: { navigate }
  }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const context = useContext(AuthContext);
    const [isEmailValid, setEmailValid] = useState(false);
    const [isFieldEdited, setFieldEdited] = useState(false);

    function validateEmail(email: string){
      var re = /\S+@\S+\.\S+/;
     if(re.test(email)){
      setEmail(email);
      setEmailValid(true);
     }
     else{
        setEmailValid(false);
     }
    }
    const validate = () => {
      validateEmail(email);
    }

    const onChangeTextHandler = (text: string) => {
      setFieldEdited(true);
      setEmail(text);
    };

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
                fontFamily: "PoppinsBold",
                fontSize: FontSize.large,
                maxWidth: "60%",
                textAlign: "center",
                marginTop: Spacing * 10,
              }}
            >
              Welcome back you've been missed!
            </Text>
          </View>
          <View
            style={{
              marginVertical: Spacing * 3,
            }}
          >
            <AppTextInput 
            placeholder="Email"
            value={email}
            onChangeText={text => onChangeTextHandler(text)}
            onBlur={validate}/>
            {!isEmailValid && isFieldEdited && <Text style={{color: 'red'}}>Invalid email addres</Text>}
            <AppTextInput 
            placeholder="Password" 
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}/>
          </View>
  
          <TouchableOpacity
            onPress={() => navigate("RecoverPassword")}
            style={{
            padding: Spacing,
            }}>
            <Text
              style={{
                fontFamily: "PoppinsSemiBold",
                fontSize: FontSize.small,
                color: Colors.primary,
                alignSelf: "flex-end",
              }}
            >
              Forgot your password ?
            </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
          onPress={() => {
            context?.login(email, password);
          }}
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
              Sign in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Register")}
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
              Create new account
            </Text>
          </TouchableOpacity>
  
          <View
            style={{
              marginVertical: Spacing * 3,
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsBold",
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
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({});