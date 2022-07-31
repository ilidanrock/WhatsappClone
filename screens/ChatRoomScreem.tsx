import {
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View
} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import ChatMessages from '../components/ChatMessages/ChatMessages';
import chats from '../data/chats';
import InputBox from '../components/InputBox/InputBox';

type Props = {};

const ChatRoomScreem = (props: Props) => {
  const route = useRoute() as any;

  console.log('What', route.params);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={65}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{
            uri: 'https://i.redd.it/qwd83nc4xxf41.jpg'
          }}
          resizeMode='cover'
          style={styles.image}>
          <FlatList
            data={chats.messages}
            renderItem={({ item }) => <ChatMessages message={item} />}
            inverted
          />
          <View>
            <InputBox />
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatRoomScreem;

const styles = StyleSheet.create({
  image: {
    justifyContent: 'flex-end'
  }
});
