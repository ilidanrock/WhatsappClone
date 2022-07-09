import { StyleSheet, Text, View, Avatar } from 'react-native'
import React from 'react'
import { ChatRoom } from '../../types';

export type ChatListItemProps = {
    ChatRoom: Array<ChatRoom>;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { ChatRoom } = props;
    return (
        <View>
            <Avatar />
            <Text>{ChatRoom[0].lastMessage.content}</Text>
        </View>
    )
}

export default ChatListItem

const styles = StyleSheet.create({})

