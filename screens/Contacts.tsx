import { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import ContactListItems from '../components/ContactListItems/ContactListItems';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../src/graphql/queries';
import { result } from '../types';

export default function Contacts() {
  const [users, setUsers] = useState<
    Array<{
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
    }>
  >([]);

  useEffect(() => {
    const query = async () => {
      const result = (await API.graphql(graphqlOperation(listUsers))) as result;
      setUsers(result.data?.listUsers.items);
    };
    query();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <ContactListItems user={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
