import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  button: {
    margin: 4,
    padding: 16,
    backgroundColor: colors.default_primary_color,
    borderColor: colors.dark_primary_color,
    borderWidth: 0.5,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.text_primary_color,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
