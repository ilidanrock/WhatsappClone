import { StatusBar, StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Layout.window.width,
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    marginTop: StatusBar.currentHeight || 0
  },
  text: {
    fontSize: 17,
    fontWeight: '600'
  },
  midContainer: {
    flexDirection: 'row'
  },
  nameLastMessage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '4%',
    paddingVertical: '2%'
  },
  lastMsg: {
    opacity: 0.5
  }
});

export default styles;