import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  button: {
    margin: 4,
    marginHorizontal: 15,
    padding: 16,
    borderColor: colors.dark_primary_color,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: colors.light_primary_color,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  buttonText: {
    color: colors.dark_primary_color,
    textAlign: 'center',
  },
});

export default styles;
