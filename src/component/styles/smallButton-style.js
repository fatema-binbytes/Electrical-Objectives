import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.3,
    borderRadius: 50,
    marginHorizontal: 20,
    borderColor: colors.default_primary_color,
    backgroundColor: colors.default_primary_color,
  },
  button: {
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.text_primary_color,
  },
});

export default styles;
