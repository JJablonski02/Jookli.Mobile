import { KeyboardAwareScrollView, KeyboardAwareScrollViewProps } from "react-native-keyboard-aware-scroll-view";
import { useState, useEffect } from "react";
import { Keyboard } from "react-native";

interface Props extends KeyboardAwareScrollViewProps {}

const KeyBoardAwareScrollViewOnVisible: React.FC<Props> = (props) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
        props.onKeyboardDidShow;
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [props.onKeyboardDidShow]);

  return (
    <KeyboardAwareScrollView
    contentContainerStyle={{flexGrow:1}}
      scrollEnabled={keyboardVisible}
      extraScrollHeight={100}
      {...props}
    />
  );
};

export default KeyBoardAwareScrollViewOnVisible;

const KeyBoardAwareScrollViewSettings: React.FC<Props> = (props) => {
  return (
    <KeyboardAwareScrollView
    extraScrollHeight={100}
      {...props}
    />
  );
};

export { KeyBoardAwareScrollViewSettings };