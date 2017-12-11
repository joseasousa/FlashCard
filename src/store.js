import {
  createStore,
  combineReducers,
  compose,
} from 'redux';
import { autoRehydrate } from 'redux-persist';

import reducers from './redux';

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  compose(autoRehydrate()),
);

export default store;
