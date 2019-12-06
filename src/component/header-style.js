import {StyleSheet, Dimensions} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: colors.default_primary_color,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text_primary_color,
    textAlign: 'center',
  },
  iconContainer: {
    position: 'absolute',
    right: 16,
  },
  icon: {},
});

export default styles;
