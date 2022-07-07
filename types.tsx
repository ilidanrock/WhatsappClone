/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

// import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// import {
//   CompositeScreenProps,
// } from '@react-navigation/native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};
// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList { }
//   }
// }
// export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
//   NativeStackScreenProps<RootStackParamList, Screen>;

// export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
//   CompositeScreenProps<
//     BottomTabScreenProps<RootTabParamList, Screen>,
//     NativeStackScreenProps<RootStackParamList>
//   >;
export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
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
  id: String;
  name: String;
  imageUri: String;
  status: String;
};

export type Message = {
  id: String;
  content: string;
  createdAt: string;
  user: User;
};

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
};
