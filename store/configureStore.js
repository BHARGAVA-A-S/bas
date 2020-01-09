import {createStore, combineReducers, applyMiddleware} from 'redux';
import countReducer from '../reducers/countReducer';
const rootReducer = combineReducers({countReducer});
import thunk from 'redux-thunk';

const configureStore = () => {
  const store = createStore(rootReducer);

  return store;
};

export default configureStore;
