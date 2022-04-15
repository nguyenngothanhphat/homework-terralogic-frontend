import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import reduxThunk from 'redux-thunk';
import {ModalReducer} from './reducers/ModalReducer';
import {AuthReducer} from './reducers/AuthReducer';
import {AdminReducer} from './reducers/AdminReducer';
import {UserReducer} from './reducers/UserReducer';
import {LoadingReducer} from './reducers/LoadingReducer';

const rootReducer = combineReducers({
  AuthReducer,
  AdminReducer,
  UserReducer,
  LoadingReducer,
  ModalReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)))

export default store;