import {combineReducers} from 'redux';
import User from './user';
import Data from './data';
import UI from './ui';

const allReducers = combineReducers({
  user: User,
  data: Data,
  ui: UI,
});
export default allReducers;
