/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChatRoomInput = {
  id?: string | null;
  _version?: number | null;
  chatRoomLastMessageId?: string | null;
};

export type ModelChatRoomConditionInput = {
  and?: Array<ModelChatRoomConditionInput | null> | null;
  or?: Array<ModelChatRoomConditionInput | null> | null;
  not?: ModelChatRoomConditionInput | null;
  chatRoomLastMessageId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null'
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ChatRoom = {
  __typename: 'ChatRoom';
  id: string;
  Messages?: ModelMessageConnection | null;
  Users?: ModelChatRoomUserConnection | null;
  LastMessage?: Message | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  chatRoomLastMessageId?: string | null;
};

export type ModelMessageConnection = {
  __typename: 'ModelMessageConnection';
  items: Array<Message | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Message = {
  __typename: 'Message';
  id: string;
  text?: string | null;
  chatroomID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelChatRoomUserConnection = {
  __typename: 'ModelChatRoomUserConnection';
  items: Array<ChatRoomUser | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ChatRoomUser = {
  __typename: 'ChatRoomUser';
  id: string;
  chatRoomID: string;
  userID: string;
  chatRoom: ChatRoom;
  user: User;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type User = {
  __typename: 'User';
  id: string;
  name: string;
  status?: string | null;
  photo?: string | null;
  Messages?: ModelMessageConnection | null;
  chatrooms?: ModelChatRoomUserConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateChatRoomInput = {
  id: string;
  _version?: number | null;
  chatRoomLastMessageId?: string | null;
};

export type DeleteChatRoomInput = {
  id: string;
  _version?: number | null;
};

export type CreateMessageInput = {
  id?: string | null;
  text?: string | null;
  chatroomID: string;
  userID: string;
  _version?: number | null;
};

export type ModelMessageConditionInput = {
  text?: ModelStringInput | null;
  chatroomID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateMessageInput = {
  id: string;
  text?: string | null;
  chatroomID?: string | null;
  userID?: string | null;
  _version?: number | null;
};

export type DeleteMessageInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserInput = {
  id?: string | null;
  name: string;
  status?: string | null;
  photo?: string | null;
  _version?: number | null;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  status?: ModelStringInput | null;
  photo?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  status?: string | null;
  photo?: string | null;
  _version?: number | null;
};

export type DeleteUserInput = {
  id: string;
  _version?: number | null;
};

export type CreateChatRoomUserInput = {
  id?: string | null;
  chatRoomID: string;
  userID: string;
  _version?: number | null;
};

export type ModelChatRoomUserConditionInput = {
  chatRoomID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelChatRoomUserConditionInput | null> | null;
  or?: Array<ModelChatRoomUserConditionInput | null> | null;
  not?: ModelChatRoomUserConditionInput | null;
};

export type UpdateChatRoomUserInput = {
  id: string;
  chatRoomID?: string | null;
  userID?: string | null;
  _version?: number | null;
};

export type DeleteChatRoomUserInput = {
  id: string;
  _version?: number | null;
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelChatRoomFilterInput | null> | null;
  or?: Array<ModelChatRoomFilterInput | null> | null;
  not?: ModelChatRoomFilterInput | null;
  chatRoomLastMessageId?: ModelIDInput | null;
};

export type ModelChatRoomConnection = {
  __typename: 'ModelChatRoomConnection';
  items: Array<ChatRoom | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  text?: ModelStringInput | null;
  chatroomID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  status?: ModelStringInput | null;
  photo?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: 'ModelUserConnection';
  items: Array<User | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelChatRoomUserFilterInput = {
  id?: ModelIDInput | null;
  chatRoomID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelChatRoomUserFilterInput | null> | null;
  or?: Array<ModelChatRoomUserFilterInput | null> | null;
  not?: ModelChatRoomUserFilterInput | null;
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput;
  condition?: ModelChatRoomConditionInput | null;
};

export type CreateChatRoomMutation = {
  createChatRoom?: {
    __typename: 'ChatRoom';
    id: string;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    LastMessage?: {
      __typename: 'Message';
      id: string;
      text?: string | null;
      chatroomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    chatRoomLastMessageId?: string | null;
  } | null;
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput;
  condition?: ModelChatRoomConditionInput | null;
};

export type UpdateChatRoomMutation = {
  updateChatRoom?: {
    __typename: 'ChatRoom';
    id: string;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    LastMessage?: {
      __typename: 'Message';
      id: string;
      text?: string | null;
      chatroomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    chatRoomLastMessageId?: string | null;
  } | null;
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput;
  condition?: ModelChatRoomConditionInput | null;
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?: {
    __typename: 'ChatRoom';
    id: string;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    LastMessage?: {
      __typename: 'Message';
      id: string;
      text?: string | null;
      chatroomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    chatRoomLastMessageId?: string | null;
  } | null;
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type CreateMessageMutation = {
  createMessage?: {
    __typename: 'Message';
    id: string;
    text?: string | null;
    chatroomID: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type UpdateMessageMutation = {
  updateMessage?: {
    __typename: 'Message';
    id: string;
    text?: string | null;
    chatroomID: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type DeleteMessageMutation = {
  deleteMessage?: {
    __typename: 'Message';
    id: string;
    text?: string | null;
    chatroomID: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: 'User';
    id: string;
    name: string;
    status?: string | null;
    photo?: string | null;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    chatrooms?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: 'User';
    id: string;
    name: string;
    status?: string | null;
    photo?: string | null;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    chatrooms?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
  condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: 'User';
    id: string;
    name: string;
    status?: string | null;
    photo?: string | null;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    chatrooms?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateChatRoomUserMutationVariables = {
  input: CreateChatRoomUserInput;
  condition?: ModelChatRoomUserConditionInput | null;
};

export type CreateChatRoomUserMutation = {
  createChatRoomUser?: {
    __typename: 'ChatRoomUser';
    id: string;
    chatRoomID: string;
    userID: string;
    chatRoom: {
      __typename: 'ChatRoom';
      id: string;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Users?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      LastMessage?: {
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      chatRoomLastMessageId?: string | null;
    };
    user: {
      __typename: 'User';
      id: string;
      name: string;
      status?: string | null;
      photo?: string | null;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      chatrooms?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateChatRoomUserMutationVariables = {
  input: UpdateChatRoomUserInput;
  condition?: ModelChatRoomUserConditionInput | null;
};

export type UpdateChatRoomUserMutation = {
  updateChatRoomUser?: {
    __typename: 'ChatRoomUser';
    id: string;
    chatRoomID: string;
    userID: string;
    chatRoom: {
      __typename: 'ChatRoom';
      id: string;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Users?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      LastMessage?: {
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      chatRoomLastMessageId?: string | null;
    };
    user: {
      __typename: 'User';
      id: string;
      name: string;
      status?: string | null;
      photo?: string | null;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      chatrooms?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteChatRoomUserMutationVariables = {
  input: DeleteChatRoomUserInput;
  condition?: ModelChatRoomUserConditionInput | null;
};

export type DeleteChatRoomUserMutation = {
  deleteChatRoomUser?: {
    __typename: 'ChatRoomUser';
    id: string;
    chatRoomID: string;
    userID: string;
    chatRoom: {
      __typename: 'ChatRoom';
      id: string;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Users?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      LastMessage?: {
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      chatRoomLastMessageId?: string | null;
    };
    user: {
      __typename: 'User';
      id: string;
      name: string;
      status?: string | null;
      photo?: string | null;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      chatrooms?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type GetChatRoomQueryVariables = {
  id: string;
};

export type GetChatRoomQuery = {
  getChatRoom?: {
    __typename: 'ChatRoom';
    id: string;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    LastMessage?: {
      __typename: 'Message';
      id: string;
      text?: string | null;
      chatroomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    chatRoomLastMessageId?: string | null;
  } | null;
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListChatRoomsQuery = {
  listChatRooms?: {
    __typename: 'ModelChatRoomConnection';
    items: Array<{
      __typename: 'ChatRoom';
      id: string;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Users?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      LastMessage?: {
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      chatRoomLastMessageId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncChatRoomsQuery = {
  syncChatRooms?: {
    __typename: 'ModelChatRoomConnection';
    items: Array<{
      __typename: 'ChatRoom';
      id: string;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Users?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      LastMessage?: {
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      chatRoomLastMessageId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetMessageQueryVariables = {
  id: string;
};

export type GetMessageQuery = {
  getMessage?: {
    __typename: 'Message';
    id: string;
    text?: string | null;
    chatroomID: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListMessagesQuery = {
  listMessages?: {
    __typename: 'ModelMessageConnection';
    items: Array<{
      __typename: 'Message';
      id: string;
      text?: string | null;
      chatroomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncMessagesQuery = {
  syncMessages?: {
    __typename: 'ModelMessageConnection';
    items: Array<{
      __typename: 'Message';
      id: string;
      text?: string | null;
      chatroomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: 'User';
    id: string;
    name: string;
    status?: string | null;
    photo?: string | null;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    chatrooms?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: 'ModelUserConnection';
    items: Array<{
      __typename: 'User';
      id: string;
      name: string;
      status?: string | null;
      photo?: string | null;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      chatrooms?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUsersQuery = {
  syncUsers?: {
    __typename: 'ModelUserConnection';
    items: Array<{
      __typename: 'User';
      id: string;
      name: string;
      status?: string | null;
      photo?: string | null;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      chatrooms?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetChatRoomUserQueryVariables = {
  id: string;
};

export type GetChatRoomUserQuery = {
  getChatRoomUser?: {
    __typename: 'ChatRoomUser';
    id: string;
    chatRoomID: string;
    userID: string;
    chatRoom: {
      __typename: 'ChatRoom';
      id: string;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Users?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      LastMessage?: {
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      chatRoomLastMessageId?: string | null;
    };
    user: {
      __typename: 'User';
      id: string;
      name: string;
      status?: string | null;
      photo?: string | null;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      chatrooms?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListChatRoomUsersQueryVariables = {
  filter?: ModelChatRoomUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListChatRoomUsersQuery = {
  listChatRoomUsers?: {
    __typename: 'ModelChatRoomUserConnection';
    items: Array<{
      __typename: 'ChatRoomUser';
      id: string;
      chatRoomID: string;
      userID: string;
      chatRoom: {
        __typename: 'ChatRoom';
        id: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        chatRoomLastMessageId?: string | null;
      };
      user: {
        __typename: 'User';
        id: string;
        name: string;
        status?: string | null;
        photo?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncChatRoomUsersQueryVariables = {
  filter?: ModelChatRoomUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncChatRoomUsersQuery = {
  syncChatRoomUsers?: {
    __typename: 'ModelChatRoomUserConnection';
    items: Array<{
      __typename: 'ChatRoomUser';
      id: string;
      chatRoomID: string;
      userID: string;
      chatRoom: {
        __typename: 'ChatRoom';
        id: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        chatRoomLastMessageId?: string | null;
      };
      user: {
        __typename: 'User';
        id: string;
        name: string;
        status?: string | null;
        photo?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?: {
    __typename: 'ChatRoom';
    id: string;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    LastMessage?: {
      __typename: 'Message';
      id: string;
      text?: string | null;
      chatroomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    chatRoomLastMessageId?: string | null;
  } | null;
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?: {
    __typename: 'ChatRoom';
    id: string;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    LastMessage?: {
      __typename: 'Message';
      id: string;
      text?: string | null;
      chatroomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    chatRoomLastMessageId?: string | null;
  } | null;
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?: {
    __typename: 'ChatRoom';
    id: string;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Users?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    LastMessage?: {
      __typename: 'Message';
      id: string;
      text?: string | null;
      chatroomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    chatRoomLastMessageId?: string | null;
  } | null;
};

export type OnCreateMessageSubscription = {
  onCreateMessage?: {
    __typename: 'Message';
    id: string;
    text?: string | null;
    chatroomID: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?: {
    __typename: 'Message';
    id: string;
    text?: string | null;
    chatroomID: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?: {
    __typename: 'Message';
    id: string;
    text?: string | null;
    chatroomID: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: 'User';
    id: string;
    name: string;
    status?: string | null;
    photo?: string | null;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    chatrooms?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: 'User';
    id: string;
    name: string;
    status?: string | null;
    photo?: string | null;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    chatrooms?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: 'User';
    id: string;
    name: string;
    status?: string | null;
    photo?: string | null;
    Messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    chatrooms?: {
      __typename: 'ModelChatRoomUserConnection';
      items: Array<{
        __typename: 'ChatRoomUser';
        id: string;
        chatRoomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateChatRoomUserSubscription = {
  onCreateChatRoomUser?: {
    __typename: 'ChatRoomUser';
    id: string;
    chatRoomID: string;
    userID: string;
    chatRoom: {
      __typename: 'ChatRoom';
      id: string;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Users?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      LastMessage?: {
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      chatRoomLastMessageId?: string | null;
    };
    user: {
      __typename: 'User';
      id: string;
      name: string;
      status?: string | null;
      photo?: string | null;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      chatrooms?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateChatRoomUserSubscription = {
  onUpdateChatRoomUser?: {
    __typename: 'ChatRoomUser';
    id: string;
    chatRoomID: string;
    userID: string;
    chatRoom: {
      __typename: 'ChatRoom';
      id: string;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Users?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      LastMessage?: {
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      chatRoomLastMessageId?: string | null;
    };
    user: {
      __typename: 'User';
      id: string;
      name: string;
      status?: string | null;
      photo?: string | null;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      chatrooms?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteChatRoomUserSubscription = {
  onDeleteChatRoomUser?: {
    __typename: 'ChatRoomUser';
    id: string;
    chatRoomID: string;
    userID: string;
    chatRoom: {
      __typename: 'ChatRoom';
      id: string;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Users?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      LastMessage?: {
        __typename: 'Message';
        id: string;
        text?: string | null;
        chatroomID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      chatRoomLastMessageId?: string | null;
    };
    user: {
      __typename: 'User';
      id: string;
      name: string;
      status?: string | null;
      photo?: string | null;
      Messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      chatrooms?: {
        __typename: 'ModelChatRoomUserConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};
