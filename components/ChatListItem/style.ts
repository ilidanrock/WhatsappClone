import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: '4%'
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
