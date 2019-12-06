import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    justifyContent: 'flex-end',
  },
  content: {
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    padding: 12,
    borderRadius: 5,
    paddingLeft: 32,
    paddingRight: 32,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  google: {
    backgroundColor: '#d34836',
  },
  facebook: {
    backgroundColor: '#3b5998',
  },
});

export default styles;
