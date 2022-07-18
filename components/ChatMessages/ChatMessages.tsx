import { View, Text } from 'react-native';
import React from 'react';
import { Message } from '../../types';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

type ChatMessagesProps = {
  message: Message;
};

const ChatMessages = (props: ChatMessagesProps) => {
  const colorSchema = useColorScheme();
  const { message } = props;
  return (
    <View>
      <Text>{message.user?.name}</Text>
      <Text>{message.content}</Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'normal',
          color: Colors[colorSchema].text,
          marginTop: '2%'
        }}>
        {new Date(`${message.createdAt}`).toLocaleDateString()}
      </Text>
    </View>
  );
};

export default ChatMessages;