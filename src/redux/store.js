import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'

import { fetchCollectionsStart } from './shop/shop.sagas'
const sagaMiddleware = createSagaMiddleware();
const middleWares = [
  // thunk,
  sagaMiddleware
];
if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(fetchCollectionsStart);

const persistor = persistStore(store);

export default { store, persistor };
