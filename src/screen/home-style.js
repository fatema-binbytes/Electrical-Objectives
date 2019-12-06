import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogo: {
    height: height * 0.33,
    resizeMode: 'center',
  },
  content: {
    flex: 0.6,
    margin: 16,
  },
});

export default styles;
