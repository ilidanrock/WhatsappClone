import { StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem/ChatListItem';

import { View } from '../components/Themed';
import chatRooms from '../data/chatRooms';


export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <ChatListItem ChatRoom={chatRooms} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
