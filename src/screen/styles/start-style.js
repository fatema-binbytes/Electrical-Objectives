import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // backgroundColor: '#fff000',
  },
  header: {
    borderColor: colors.dark_primary_color,
    borderBottomWidth: 1,
  },
  labelText: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    textAlign: 'center',
    color: colors.text_primary_color,
    fontSize: 18,
  },
  btnStart: {position: 'absolute', bottom: 50, right: 0},
  btnTxt: {
    color: colors.dark_primary_color,
    textAlign: 'right',
    fontSize: 18,
  },
});

export default styles;
