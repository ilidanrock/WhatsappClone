import { SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import { ChatRoom } from '../../types';
import { Avatar } from '@rneui/themed';
import styles from './style';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export type ChatListItemProps = {
  ChatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const colorSchema = useColorScheme();
  const { ChatRoom } = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.midContainer}>
        <Avatar
          source={{
            uri: ChatRoom.users[0].imageUri
          }}
          size={64}
          rounded
        />
        <View style={styles.nameLastMessage}>
          <Text style={[styles.text, { color: Colors[colorSchema].text }]}>
            {ChatRoom.users[0].name}
          </Text>
          <Text style={[styles.lastMsg, { color: Colors[colorSchema].text }]}
            numberOfLines={1}>
            {ChatRoom.lastMessage.content}
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'normal',
          color: Colors[colorSchema].text,
          marginTop: '2%'
        }}>
        {new Date(`${ChatRoom.lastMessage.createdAt}`).toLocaleDateString()}
      </Text>
    </SafeAreaView>
  );
};

export default ChatListItem;
