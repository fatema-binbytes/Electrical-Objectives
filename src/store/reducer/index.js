import {combineReducers} from 'redux';
import User from './user';
import Data from './questionData';
import UI from './ui';

const allReducers = combineReducers({
  user: User,
  questionData: Data,
  ui: UI,
});
export default allReducers;
