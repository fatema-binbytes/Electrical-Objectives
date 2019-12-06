import {StyleSheet, Dimensions} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    borderColor: colors.gray,
    borderWidth: 0.7,
    borderRadius: 3,
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
});

export default styles;
