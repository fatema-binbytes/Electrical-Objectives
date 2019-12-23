import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  txt: {
    fontSize: 18,
    color: colors.gray,
    textAlign: 'justify',
    fontFamily: 'sans-serif-medium',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.7,
  },
  imgView: {
    padding: 15,
    borderRadius: 100,
  },
  heading: {
    padding: 10,
    fontSize: 22,
    color: colors.dark_primary_color,
  },
  about: {alignItems: 'center', flex: 1},
});
export default styles;
