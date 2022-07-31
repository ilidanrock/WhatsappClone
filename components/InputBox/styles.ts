import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    boxShadow: '0px 0px 10px 0px #9da7ab',
    marginVertical: '1%',
    minHeight: 50,
    width: '85%'
  },
  mainContainer: {
    marginHorizontal: '3%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  icons: {
    alignSelf: 'center',
    alignContent: 'center',
    marginHorizontal: '3%'
  },
  input: {
    textAlignVertical: 'center',
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    fontSize: 16
  }
});

export default styles;
