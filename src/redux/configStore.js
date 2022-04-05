import { applyMiddleware, combineReducers, createStore } from "redux";
import createMiddlewareSaga from 'redux-saga';
import { rootSaga } from "./sagas/rootSaga";
import {ModalReducer} from './reducers/ModalReducer';

const rootReducer = combineReducers({
  ModalReducer
})

const middlewareSaga = createMiddlewareSaga();

const store = createStore(rootReducer, applyMiddleware(middlewareSaga))

middlewareSaga.run(rootSaga)

export default store;