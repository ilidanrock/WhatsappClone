import { StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 30,
    marginHorizontal: '3%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    boxShadow: '0px 0px 10px 0px #9da7ab',
    marginVertical: '1%',
    minHeight: 40
  },
  mainContainer: {
    marginHorizontal: '3%',
    flexDirection: 'row',
    maxWidth: Layout.window.width * 0.7
  }
});

export default styles;
