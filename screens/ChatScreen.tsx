import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem/ChatListItem';
import NewMessageButton from '../components/NewMessageButton/NewMessageButton';
import chatRooms from '../data/chatRooms';

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem ChatRoom={item} />}
        keyExtractor={item => item.id}
      />
      <NewMessageButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
});
