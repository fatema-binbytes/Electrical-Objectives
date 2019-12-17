import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    borderColor: colors.gray,
    borderWidth: 0.7,
    borderRadius: 10,
    backgroundColor: '#FFF',
    elevation: 2,
    flexDirection: 'row',
    padding: 16,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
  },
  labelText: {
    color: colors.gray,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  htmlView: {marginLeft: 8},
  optionTxtView: {
    justifyContent: 'center',
    marginLeft: 4,
    marginRight: 4,
  },
});

export default styles;
