import { KeyboardAvoidingView, Platform, TextInput, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
type Props = {};

const InputBox = (props: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Ionicons
            name='ios-happy-outline'
            size={28}
            color='#b8bbbd'
            style={{ alignSelf: 'center', alignContent: 'center' }}
          />
          <TextInput
            placeholder='Type a message'
            multiline
            style={{ textAlignVertical: 'center', flex: 1, backgroundColor: '#b8bbbd', marginHorizontal: 10, fontSize: 16 }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default InputBox;
