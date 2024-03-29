import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor
} from '@aws-amplify/datastore';

type ChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type ChatRoomUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

export declare class ChatRoom {
  readonly id: string;
  readonly Messages?: (Message | null)[] | null;
  readonly Users?: (ChatRoomUser | null)[] | null;
  readonly LastMessage?: Message | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
  constructor(init: ModelInit<ChatRoom, ChatRoomMetaData>);
  static copyOf(
    source: ChatRoom,
    mutator: (
      draft: MutableModel<ChatRoom, ChatRoomMetaData>
    ) => MutableModel<ChatRoom, ChatRoomMetaData> | void
  ): ChatRoom;
}

export declare class Message {
  readonly id: string;
  readonly text?: string | null;
  readonly chatroomID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(
    source: Message,
    mutator: (
      draft: MutableModel<Message, MessageMetaData>
    ) => MutableModel<Message, MessageMetaData> | void
  ): Message;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly status?: string | null;
  readonly photo?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly chatrooms?: (ChatRoomUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(
    source: User,
    mutator: (
      draft: MutableModel<User, UserMetaData>
    ) => MutableModel<User, UserMetaData> | void
  ): User;
}

export declare class ChatRoomUser {
  readonly id: string;
  readonly chatRoom: ChatRoom;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ChatRoomUser, ChatRoomUserMetaData>);
  static copyOf(
    source: ChatRoomUser,
    mutator: (
      draft: MutableModel<ChatRoomUser, ChatRoomUserMetaData>
    ) => MutableModel<ChatRoomUser, ChatRoomUserMetaData> | void
  ): ChatRoomUser;
}
