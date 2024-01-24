import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ImageBackground,
    Dimensions,
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
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
  
  type Props = NativeStackScreenProps<RootStackParamList, "Login">;
  
  
  
  const LoginScreen: React.FC<Props> = ({ navigation: { navigate }
  }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const context = useContext(AuthContext);
    const [isEmailValid, setEmailValid] = useState(false);
    const [isFieldEdited, setFieldEdited] = useState(false);
    const { height } = Dimensions.get("window");

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
        <KeyboardAwareScrollView>
        <View
          style={{
            padding: Spacing * 2,
          }}
        >
          <View style={{
            marginTop: Spacing * 2,
            marginBottom: Spacing * 2,
          }}>
              <TouchableOpacity style={{
                position: "absolute",
                top: Spacing * 2,
                right: Spacing * 2,
                zIndex: 1,
                borderWidth: 1,
                borderColor: Colors.gray,
                borderRadius: 3,
                paddingLeft: 5,
                paddingRight: 5,
              }} onPress={() => navigate("Register")}>
                <Text
                  style={{
                    fontFamily: "PoppinsSemiBold",
                    color: Colors.primary,
                    textAlign: "center",
                    fontSize: FontSize.small,
                  }}
                >
                  Register
                </Text>
              </TouchableOpacity>
          </View>
          <View>
          <ImageBackground
            style={{
              height: height / 5,
            }}
            resizeMode="contain"
            source={require("../../../assets/images/JoyProfits_Register.png")}
          />
          </View>
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
                marginTop: Spacing * 2,
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
            if(isEmailValid){
              context?.login(email, password);
            }else{
              console.log("Invalid")
            }
          }}
            style={{
              padding: Spacing,
              backgroundColor: Colors.primary,
              marginVertical: Spacing * 3,
              borderRadius: Spacing * 3,
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
        </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({});