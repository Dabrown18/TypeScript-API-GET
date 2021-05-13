"use strict";
exports.__esModule = true;
exports.composeForEnvironment = void 0;
var composeForEnvironment = function (isDevelopment, dependencies) {
    if (isDevelopment === void 0) { isDevelopment = true; }
    var _compose = dependencies.compose, _composeWithDevTools = dependencies.composeWithDevTools;
    return isDevelopment ? _composeWithDevTools({ maxAge: 1000 }) : _compose;
};
exports.composeForEnvironment = composeForEnvironment;
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
