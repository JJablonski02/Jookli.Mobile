import { Dimensions } from 'react-native';

const xSmall: number = 10;
const small: number = 14;
const medium: number = 16;
const large: number = 20;
const xLarge: number = 30;
const xxLarge: number = 35;

export default{
    xSmall,
    small,
    medium,
    large,
    xLarge,
    xxLarge,
}
const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size : number)  => width / guidelineBaseWidth * size;
const verticalScale = (size : number) => height / guidelineBaseHeight * size;
const moderateScale = (size : number, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};