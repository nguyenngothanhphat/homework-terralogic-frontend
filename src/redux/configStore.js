import { applyMiddleware, combineReducers, createStore } from "redux";
import createMiddlewareSaga from 'redux-saga';
import { rootSaga } from "./saga/rootSaga";

const rootReducer = combineReducers({

})

const createMiddleware = createMiddlewareSaga();

const store = createStore(rootReducer, applyMiddleware(createMiddleware))

createMiddleware.run(rootSaga)

export default store;