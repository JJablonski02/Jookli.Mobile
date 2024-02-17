import * as React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import TextV from './global/Text';

const RadioButtonSex = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
        <TextV>Male</TextV>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 60}}>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
        <TextV>Female</TextV>
      </View>
    </View>
  );
};

export default RadioButtonSex;