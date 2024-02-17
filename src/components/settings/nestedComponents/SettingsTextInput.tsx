import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View, StyleProp, ViewStyle, TextInputProps, Platform } from 'react-native';
import TextV from '../../global/Text';
import { moderateScale } from '../../../constants/FontSize';

interface SettingsTextInputVProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  placeholder: string;
  onChangeText: (text: string) => void;
  error?: boolean;
}

const SettingsTextInput : React.FC<SettingsTextInputVProps> = ({ containerStyle, placeholder, onChangeText, error, ...props }) => {
    const [isFocued, setIsFocused] = useState(false);
    const [text, setText] = useState<string>('');
    const [showPassword, setShowPassword] = useState(props.secureTextEntry);
    const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;
    
    const handleFocus = () => {
        setIsFocused(true);
        animatedLabel(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        if(!text){
            animatedLabel(0);
        }
    };

    const handleOnChangeText = (text: string) => {
        setText(text);
        if(onChangeText){
            onChangeText(text);
        }else{
            animatedLabel(isFocued ? 1 : 0);
        }
    };

    const animatedLabel = (toValue : number) => {
        Animated.timing(labelPosition, {
            toValue,
            duration: 400,
            useNativeDriver: false,
        }).start();
    }

    const labelStyle = {
        left: 5,
        top: labelPosition.interpolate(Platform.OS === 'ios' ? {
            inputRange: [0, 1],
            outputRange: [10, moderateScale(-6)],
        } : {
          inputRange: [0, 1],
          outputRange: [moderateScale(14), moderateScale(-4)],
        }),
        fontSize: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [moderateScale(14), moderateScale(12)],
        }),
        color: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: ['gray', '#888'],
        })
    };


    return(
        <View style={containerStyle}>
        <View style={[styles.innerContainer, error && { borderColor: 'red' }]}>
          <Animated.Text style={[styles.label, labelStyle]} allowFontScaling={false}>{placeholder}</Animated.Text>
          <View style={styles.inputContainer}>
            <TextInput
            {...props}
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleOnChangeText}
            value={text}
            textAlignVertical='center'
            textContentType={props.secureTextEntry ? 'newPassword' : 'none'}
            secureTextEntry={showPassword}
            allowFontScaling={false}
            />
            {props.secureTextEntry && !!text && (
              <View>
                <TouchableOpacity
                  style={{ width: 24 }}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? (
                    <Text>Hide</Text>
                  ) : (
                    <Text>Show</Text>
                  )}
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        {error && <TextV style={styles.errorText}>{error}</TextV>}
      </View>
    );
};

const styles = StyleSheet.create({
    innerContainer: {
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
      justifyContent: 'center',
      marginTop: 4,
    },
    label: {
      position: 'absolute',
      color: 'black',
      fontSize: moderateScale(14),
      fontFamily: 'PoppinsRegular',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 10,
    },
    input: {
      flex: 1,
      marginTop: 12,
      paddingLeft: 5,
      fontFamily: 'PoppinsRegular'
    },
    errorText: {
      marginTop: 12,
      fontSize: moderateScale(12),
      color: 'red',
    },
  });
  

export default SettingsTextInput;

// const SettingsTextInputV: React.FC<SettingsTextInputVProps> = ({ containerStyle, placeHolder, onChangeText, error, ...props }) => {
//     const [focused, setFocused] = useState(false);
//     const labelAnimation = useRef(new Animated.Value(0)).current;
//     const labelAnimationInterpolate = labelAnimation.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, -20],
//     });
  
//     const onFocus = () => {
//       setFocused(true);
//       Animated.timing(labelAnimation, {
//         toValue: 1,
//         duration: 400,
//         useNativeDriver: false,
//       }).start();
//     };
  
//     const onBlur = () => {
      
//         setFocused(false);
//         Animated.timing(labelAnimation, {
//           toValue: 0,
//           duration: 400,
//           useNativeDriver: false,
//         }).start();
      
//     };
  
//     return (
//       <View style={containerStyle}>
//         <Animated.Text style={{
//           position: 'absolute',
//           left: 10,
//           top: labelAnimationInterpolate,
//           fontSize: 12,
//           color: error ? 'red' : 'black',
//         }}>{placeHolder}</Animated.Text>
//         <TextInput
//           style={styles.input}
//           onFocus={onFocus}
//           onBlur={onBlur}
//           onChangeText={onChangeText}
//           {...props}
//         />
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     input: {
//       borderBottomColor: 'black',
//       borderBottomWidth: 1,
//     },
//   });