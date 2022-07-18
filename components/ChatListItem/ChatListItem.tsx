import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { ChatListItemProps, TabParamList } from '../../types';
import { Avatar } from '@rneui/themed';
import styles from './style';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProps = StackNavigationProp<TabParamList>

const ChatListItem = (props: ChatListItemProps) => {
  const colorSchema = useColorScheme();
  const { ChatRoom } = props;
  const navigation = useNavigation<NavigationProps>();


  const onCLick = () => {
    navigation.navigate('ChatRoomScreem', {
      id: ChatRoom.id,
      name: ChatRoom.users[0].name,
    });
  };

  return (
    <Pressable
      onLongPress={onCLick}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'rgb(221, 221, 221)' : 'white'
        },
        styles.container
      ]}
      delayLongPress={30}>
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
          <Text
            style={[styles.lastMsg, { color: Colors[colorSchema].text }]}
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
    </Pressable>
  );
};

export default ChatListItem;
