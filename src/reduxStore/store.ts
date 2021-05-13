import {SagaMiddleware, SagaMiddlewareOptions} from '@redux-saga/core';
import {Action, applyMiddleware, compose, createStore, StoreEnhancer, Middleware, StoreCreator} from 'redux';
import {composeWithDevTools, EnhancerOptions} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reduxStore/reducers/'
// import sagas from './combinedSagas';
import {CombinedState} from "./reducers/combinedReducers";

type StoreCompose = (...functions: Function[]) => StoreEnhancer;

export interface StoreDependencies {
  applyMiddleware: (...middlewares: Middleware[]) => StoreEnhancer;
  compose: StoreCompose;
  composeWithDevTools: (options: EnhancerOptions) => StoreCompose;
  createSagaMiddleware: (options?: SagaMiddlewareOptions) => SagaMiddleware;
  createStore: StoreCreator;
  isDevelopment: boolean;
}

export const composeForEnvironment = (isDevelopment: boolean = true, dependencies: StoreDependencies) => {
  const {compose: _compose, composeWithDevTools: _composeWithDevTools} = dependencies;

  return isDevelopment ? _composeWithDevTools({maxAge: 1000}) : _compose;
};

// export const generateStore = (
//   dependencies: StoreDependencies = {
//     applyMiddleware,
//     compose,
//     composeWithDevTools,
//     createSagaMiddleware,
//     createStore,
//     isDevelopment: true,
//   },
// ) => {
//   const {
//     applyMiddleware: _applyMiddleware,
//     createSagaMiddleware: _createSagaMiddleware,
//     createStore: _createStore,
//     isDevelopment,
//   } = dependencies;
//   const sagaMiddleware = _createSagaMiddleware();
//   const enhancer = _applyMiddleware(...[sagaMiddleware]);
//   const store = _createStore<CombinedState, Action<any>, unknown, unknown>(rootReducer, composeForEnvironment(isDevelopment, dependencies)(enhancer));
//   sagaMiddleware.run(sagas);
//   return store;
// };
//
// export default generateStore();
