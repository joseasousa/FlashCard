import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import Reactotron from 'reactotron-react-native';

import reducers from './reducers';

const config = {
  key: 'root',
  storage,
};

const createAppropriateStore = __DEV__ ? Reactotron.createStore : createStore;
const rootReducer = persistCombineReducers(config, reducers);

export const store = createAppropriateStore(rootReducer);
export const persistor = persistStore(store);

