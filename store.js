import { createStore, middleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from './src/reducers';

const middleware = [];

const store = createStore(
  reducers,
  middleware(...middleware),
);

export default store;
