import {

  KeyboardAvoidingView,
  Platform,
  TextInput,
  View
} from 'react-native'
import React from 'react'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
type Props = {}

const InputBox = (props: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.mainContainer} >
          <Ionicons name="ios-happy-outline" size={28} color="#b8bbbd" style={{ alignSelf: 'center', alignContent: 'center' }} />
          <TextInput placeholder='Your message here' multiline style={{ flex: 1, textAlignVertical: "center" }} />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default InputBox

