import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import {
  Ionicons,
  FontAwesome,
  FontAwesome5
} from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import ButtonSend from '../ButtonSend/ButtonSend';
type Props = {};

const InputBox = (props: Props) => {
  const [text, setText] = useState<string | any>('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flexDirection: 'row' }}>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Ionicons
            name='ios-happy-outline'
            size={28}
            color={Colors.inputIcon.color}
            style={styles.icons}
          />
          <TextInput
            placeholder='Type a message'
            multiline
            style={styles.input}
            onChangeText={text => setText(text)}
            value={text}
          />
          <View style={styles.icons}>
            <FontAwesome
              name='paperclip'
              size={24}
              color={Colors.inputIcon.color}
            />
          </View>
          <View style={styles.icons}>
            <FontAwesome5
              name='camera'
              size={24}
              color={Colors.inputIcon.color}
            />
          </View>

        </View>
      </View>
      <View>
        <ButtonSend text={text} />
      </View>

    </KeyboardAvoidingView>
  );
};

export default InputBox;
