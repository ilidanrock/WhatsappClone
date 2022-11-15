
import React, { createContext, useContext, useState } from 'react';
import { ApiGraphQL } from '../service/ApiGraphQL';
import { itemUser, Types } from '../types';

const ApiContext = createContext<Types>(
  {} as Types
)

const ApiProvider: React.FC = ({ children }) => {

  const [users, setUsers] = useState<itemUser>()



  const getListUsers = async () => {
    const apiGraphQL = new ApiGraphQL()
    setUsers((await apiGraphQL.getAllContacts()))
  }


  return (
    <ApiContext.Provider
      value={{
        users,
        getListUsers
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

function useApiContext(): Types {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error('What do you mean ?');
  }

  return context;
}

export { ApiContext, ApiProvider, useApiContext }