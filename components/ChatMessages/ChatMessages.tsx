import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { Message } from '../../types';
import Colors from '../../constants/Colors';
import moment from 'moment';
import styles from './styles';

type ChatMessagesProps = {
  message: Message;
};

const ChatMessages = (props: ChatMessagesProps) => {
  const { message } = props;
  const MyMessage = () => {
    return message.user.id === 'u1';
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{
        uri: 'https://i.redd.it/qwd83nc4xxf41.jpg',
      }} resizeMode="cover" style={styles.image}>
        <View
          style={[
            styles.messageBox,
            {
              backgroundColor: MyMessage()
                ? Colors.messageSender.background
                : Colors.messageReceiver.background,
              alignSelf: MyMessage() ? 'flex-end' : 'flex-start'
            }
          ]}>
          {!MyMessage() && <Text style={styles.name}>{message.user?.name}</Text>}
          <Text style={styles.message} >{message.content}</Text>
          <Text
            style={styles.time}>
            {moment(message.createdAt).fromNow(true)}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ChatMessages;
