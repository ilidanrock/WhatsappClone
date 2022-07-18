import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

type Props = {};

const ChatRoomScreem = (props: Props) => {

  const route = useRoute();

  console.log("What", route.params);

  return (
    <View>
      <Text>ChatRooms</Text>
    </View>
  );
};

export default ChatRoomScreem;
