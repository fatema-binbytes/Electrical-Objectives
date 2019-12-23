import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../config/colors';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light_primary_color,
    flex: 1,
  },
  panel: {
    margin: 16,
    backgroundColor: '#fff',
    borderColor: '#333',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  question: {
    margin: 10,
  },
  questionView: {
    flexDirection: 'row',
    marginVertical: 2,
    alignItems: 'center',
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
    marginTop: 8,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#999',
    fontSize: 12,
  },
  questionLabelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  correct: {
    backgroundColor: colors.correct_answer,
    borderColor: 'green',
  },
  wrong: {
    backgroundColor: colors.wrong_answer,
    borderColor: 'red',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  isLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
