import createSagaMiddleware from "redux-saga";

import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

import { rootReducer } from "./rootReducer";

import { watcherSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)));

export const persistor = persistStore(store);

sagaMiddleware.run(watcherSaga);

export default store;