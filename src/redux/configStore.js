import { applyMiddleware, combineReducers, createStore } from "redux";
import createMiddlewareSaga from 'redux-saga';
import { rootSaga } from "./sagas/rootSaga";

const rootReducer = combineReducers({

})

const middlewareSaga = createMiddlewareSaga();

const store = createStore(rootReducer, applyMiddleware(middlewareSaga))

middlewareSaga.run(rootSaga)

export default store;