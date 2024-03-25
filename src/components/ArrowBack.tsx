import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity, View, StyleSheet, TouchableOpacityProps, BackHandler, Button } from 'react-native';
import Spacing from '../constants/Spacing';
import Colors from '../constants/Colors';
import TextV from './global/Text';
import {useNavigation} from '@react-navigation/native';

interface ArrowBackProps extends TouchableOpacityProps {
}

const ArrowBack: React.FC<ArrowBackProps> = () => {

const navigation = useNavigation();
    const handleOnPress = () => {
        navigation.goBack();
    }

  return (
    <TouchableOpacity onPress={() => handleOnPress()}>
        <View>
            <Ionicons name="arrow-back" size={30} color={Colors.primary} style={styles.icon} />
        </View>
    </TouchableOpacity>
  );
};

export default ArrowBack;


const styles = StyleSheet.create({
    icon: {
    },
});
