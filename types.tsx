
import { ImageSourcePropType } from 'react-native';


export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoomScreem: any;
  ModalLog: any;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: string;
  name: string;
  imageUri?: ImageSourcePropType;
  status?: string;
};

export type Message = {
  id: string;
  content: string;
  createdAt: string;
  user: User;
};

export type ChatRoom = {
  id: string;
  users: User[];
  lastMessage: Message;
};

export type ChatListItemProps = {
  ChatRoom: ChatRoom | any;
};

export type TabParamList = {
  ChatRoomScreem: {
    id: string;
    name: string;
  };
  Contacts: undefined;
  user: any;
  ModalLog: undefined;
};

export type ContactListItemsProps = {
  user: User;
};

export type result = {
  data: {
    listUsers: {
      items: Array<{
        Messages: {
          nextToken: any;
          startedAt: any;
        };
        createdAt: string;
        id: string;
        name: string;
        photo: string;
        status: string;
        updatedAt: string;
      }>;
    };
  };
};