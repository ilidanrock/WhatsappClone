
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import ContactListItems from '../components/ContactListItems/ContactListItems';
import { useApiContext } from '../context/ApiContext';
;

export default function Contacts() {

  const context = useApiContext()

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={context.users}
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
