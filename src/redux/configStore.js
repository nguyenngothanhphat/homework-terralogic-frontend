import { applyMiddleware, combineReducers, createStore } from "redux";
import createMiddlewareSaga from 'redux-saga';
import reduxThunk from 'redux-thunk';
import { rootSaga } from "./sagas/rootSaga";
import {ModalReducer} from './reducers/ModalReducer';
import {AuthReducer} from './reducers/AuthReducer';
import {AdminReducer} from './reducers/AdminReducer'

const rootReducer = combineReducers({
  ModalReducer,
  AuthReducer,
  AdminReducer
})

const middlewareSaga = createMiddlewareSaga();

const store = createStore(rootReducer, applyMiddleware(middlewareSaga, reduxThunk))

middlewareSaga.run(rootSaga)

export default store;