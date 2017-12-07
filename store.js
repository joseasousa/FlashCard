import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';

import { AsyncStorage } from 'react-native';

import reducers from './src/reducers';

const store = createStore(
  reducers,
);

//persistStore(store, { storage: AsyncStorage });

export default store;
