import { applyMiddleware, combineReducers, createStore } from "redux";
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

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

export default store;