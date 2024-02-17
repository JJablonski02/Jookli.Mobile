import React from "react";
import { Text, TextProps} from "react-native";

const TextV : React.FC<TextProps> = ({children, ...otherProps}) => {
    return (
        <Text {...otherProps} allowFontScaling={false}>
            {children}
        </Text>
    )
};

export default TextV;