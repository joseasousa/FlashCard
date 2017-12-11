
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from 'redux';
  import { autoRehydrate } from 'redux-persist';
  const createAppropriateStore = __DEV__ ? console.createStore : createStore;  
  import reducers from './src/redux';
  
  const rootReducer = combineReducers(reducers);
  
  export default createAppropriateStore(
    rootReducer,
    compose(
      autoRehydrate(),
    ),
  );
  