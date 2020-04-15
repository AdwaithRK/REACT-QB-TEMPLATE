import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import rootSaga from './middleware';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer =
  process.env.NODE_ENV === 'production' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
