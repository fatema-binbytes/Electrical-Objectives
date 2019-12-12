import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {name as appName} from './app.json';

import AppStack from './src/navigation';
import Store from './src/store';

const persistStore = Store();
const wrapRedux = () => {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <AppStack />
      </PersistGate>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => wrapRedux);
