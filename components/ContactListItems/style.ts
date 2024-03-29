import { StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: Layout.window.width,
    width: Layout.window.width,
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    marginTop: 0
  },
  text: {
    fontSize: 17,
    fontWeight: '600'
  },
  midContainer: {
    flexDirection: 'row'
  },
  name: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '4%',
    paddingVertical: '3%',
    maxWidth: Layout.window.width - Layout.window.width / 2
  },
  status: {
    opacity: 0.5
  },
  icon: {
    marginHorizontal: '4%'
  }
});

export default style;
