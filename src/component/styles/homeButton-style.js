import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    elevation: 4,
    borderRadius: 10,
    borderWidth: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txt: {
    color: colors.text_primary_color,
    fontSize: 18,
  },
});
export default styles;
