export const schema = {
  models: {
    ChatRoom: {
      name: 'ChatRoom',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: []
        },
        Messages: {
          name: 'Messages',
          isArray: true,
          type: {
            model: 'Message'
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: 'chatroomID'
          }
        },
        Users: {
          name: 'Users',
          isArray: true,
          type: {
            model: 'ChatRoomUser'
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: 'chatRoom'
          }
        },
        LastMessage: {
          name: 'LastMessage',
          isArray: false,
          type: {
            model: 'Message'
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: 'HAS_ONE',
            associatedWith: 'id',
            targetName: 'chatRoomLastMessageId'
          }
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        },
        chatRoomLastMessageId: {
          name: 'chatRoomLastMessageId',
          isArray: false,
          type: 'ID',
          isRequired: false,
          attributes: []
        }
      },
      syncable: true,
      pluralName: 'ChatRooms',
      attributes: [
        {
          type: 'model',
          properties: {}
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read']
              }
            ]
          }
        }
      ]
    },
    Message: {
      name: 'Message',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: []
        },
        text: {
          name: 'text',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: []
        },
        chatroomID: {
          name: 'chatroomID',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: []
        },
        userID: {
          name: 'userID',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: []
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        }
      },
      syncable: true,
      pluralName: 'Messages',
      attributes: [
        {
          type: 'model',
          properties: {}
        },
        {
          type: 'key',
          properties: {
            name: 'byChatRoom',
            fields: ['chatroomID']
          }
        },
        {
          type: 'key',
          properties: {
            name: 'byUser',
            fields: ['userID']
          }
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read']
              }
            ]
          }
        }
      ]
    },
    User: {
      name: 'User',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: []
        },
        name: {
          name: 'name',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: []
        },
        status: {
          name: 'status',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: []
        },
        photo: {
          name: 'photo',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: []
        },
        Messages: {
          name: 'Messages',
          isArray: true,
          type: {
            model: 'Message'
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: 'userID'
          }
        },
        chatrooms: {
          name: 'chatrooms',
          isArray: true,
          type: {
            model: 'ChatRoomUser'
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: 'user'
          }
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        }
      },
      syncable: true,
      pluralName: 'Users',
      attributes: [
        {
          type: 'model',
          properties: {}
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read']
              }
            ]
          }
        }
      ]
    },
    ChatRoomUser: {
      name: 'ChatRoomUser',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: []
        },
        chatRoom: {
          name: 'chatRoom',
          isArray: false,
          type: {
            model: 'ChatRoom'
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: 'BELONGS_TO',
            targetName: 'chatRoomID'
          }
        },
        user: {
          name: 'user',
          isArray: false,
          type: {
            model: 'User'
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: 'BELONGS_TO',
            targetName: 'userID'
          }
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        }
      },
      syncable: true,
      pluralName: 'ChatRoomUsers',
      attributes: [
        {
          type: 'model',
          properties: {}
        },
        {
          type: 'key',
          properties: {
            name: 'byChatRoom',
            fields: ['chatRoomID']
          }
        },
        {
          type: 'key',
          properties: {
            name: 'byUser',
            fields: ['userID']
          }
        }
      ]
    }
  },
  enums: {},
  nonModels: {},
  version: '9d55b7c5eecf0a64444b583850bc6ec7'
};
