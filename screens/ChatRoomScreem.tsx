import { FlatList } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import ChatMessages from '../components/ChatMessages/ChatMessages';
import chats from '../data/chats';

type Props = {};

const ChatRoomScreem = (props: Props) => {
  const route = useRoute() as any;

  console.log('What', route.params);

  return (
    <FlatList
      data={chats.messages}
      renderItem={({ item }) => <ChatMessages message={item} />}
    />
  );
};

export default ChatRoomScreem;
