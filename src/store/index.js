import {createStore, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const Reducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(Reducer, {}, applyMiddleware(thunk, logger));
  let persistor = persistStore(store);
  return {store, persistor};
};
