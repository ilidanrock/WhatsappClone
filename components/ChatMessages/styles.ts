import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  messageBox: {
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 10,
    maxWidth: '90%',
    padding: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  message: {
    fontSize: 16,
  },
  name: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginVertical: 5
  },
  time: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'normal',
    marginTop: '2%',
    textAlign: 'right'
  }
});

export default styles;
