import { Pressable, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import {
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';

type Props = {
  text: any
}

const ButtonSend = (props: Props) => {
  const { text } = props
  return (
    <Pressable
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onPress={() => {
        console.log(text);
      }}
    >
      <View
        style={{
          backgroundColor: Colors.light.tint,
          height: 50,
          width: 50,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {text.length > 0 ? (
          <MaterialIcons name='send' size={26} color='white' />
        ) : (
          <MaterialCommunityIcons name='microphone' size={26} color='white' />
        )}
      </View>
    </Pressable>
  )
}

export default ButtonSend

