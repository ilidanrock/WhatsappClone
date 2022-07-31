import { Pressable, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import styles from './Styles';

type Props = {
  text: any;
};

const ButtonSend = (props: Props) => {
  const onSendHandler = () => {
    console.log('send message');
  };

  const onSendVoiceHandler = () => {
    console.log('send voice');
  };

  const onPress = () => {
    if (text.length > 0) {
      onSendHandler();
    } else {
      onSendVoiceHandler();
    }
  };
  const { text } = props;
  return (
    <Pressable
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onPress={() => {
        onPress();
      }}>
      <View style={styles.container}>
        {text.length > 0 ? (
          <MaterialIcons name='send' size={26} color='white' />
        ) : (
          <MaterialCommunityIcons name='microphone' size={26} color='white' />
        )}
      </View>
    </Pressable>
  );
};

export default ButtonSend;
