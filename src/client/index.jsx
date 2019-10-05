import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import App from './App';

import rootReducer from '../client/reducers';
import rootSaga from '../client/sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
      ...createStore(rootReducer, applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()),
      runSaga: sagaMiddleware.run(rootSaga)
  }
};

const store =  configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);