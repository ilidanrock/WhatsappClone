import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import ContactListItems from '../components/ContactListItems/ContactListItems';
import users from '../data/users';

export default function Contacts() {
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
