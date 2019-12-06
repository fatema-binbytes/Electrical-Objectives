import {StyleSheet, Dimensions} from 'react-native';
import colors from '../config/colors';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light_primary_color,
    flex: 1,
  },
  panel: {
    marginTop: 16,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderColor: '#333',
    borderRadius: 4,
  },
  question: {
    margin: 16,
  },
  questionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questionText: {
    fontSize: 18,
    color: '#333',
  },
  radio: {
    width: width * 0.8,
    flex: 1,
    paddingLeft: 8,
  },
  optionLabelText: {
    margin: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#999',
    fontSize: 12,
  },
  questionLabelText: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  correct: {
    backgroundColor: colors.correct_answer,
  },
  wrong: {
    backgroundColor: colors.wrong_answer,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});

export default styles;
