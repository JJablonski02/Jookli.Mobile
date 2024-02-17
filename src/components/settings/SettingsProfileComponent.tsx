import React from 'react';
import { 
    View, 
    StyleSheet, 
    Image,
    TouchableOpacity 
} from 'react-native';
import Colors from '../../constants/Colors';
import Spacing from '../../constants/Spacing';
import TextV from '../global/Text';


const SettingsProfileComponent : React.FC = () => {
    return(
        <View style={styles.profile}>
          <View style={styles.profileHeader}>
            <Image
              alt=""
              source={require('../../../assets/images/bitmoji.png')}
              style={styles.profileAvatar}
              resizeMode="contain" />

            <View>
              <TextV style={styles.profileName}>John Doe</TextV>

              <TextV style={styles.profileHandle}>@john.doe</TextV>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAction}>
              <TextV style={styles.profileActionText}>Edit Profile</TextV>
            </View>
          </TouchableOpacity>
        </View>
    );
};

export default SettingsProfileComponent;

const styles = StyleSheet.create({
      profile: {
        paddingTop: 12,
        paddingHorizontal: 24,
        paddingBottom: 24,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
      },
      profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      profileAvatar: {
        width: 60,
        height: 60,
        borderRadius: 1000,
        marginRight: 12,
      },
      profileName: {
        fontSize: 17,
        fontWeight: '600',
        color: '#3d3d3d',
      },
      profileHandle: {
        marginTop: 4,
        fontSize: 15,
        color: '#989898',
      },
      profileAction: {
        marginTop: 16,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderRadius: Spacing * 2,
      },
      profileActionText: {
        marginRight: 8,
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
      },
});