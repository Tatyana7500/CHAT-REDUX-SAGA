import { createStore, applyMiddleware } from 'redux';
import { getBrowserInfo } from './utils/common';
import React, { lazy, Suspense } from 'react';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import rootReducer from '../client/reducers';
import rootSaga from '../client/sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
      ...createStore(rootReducer, applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()),
      runSaga: sagaMiddleware.run(rootSaga)
  }
};

const getAppComponent = isMobile => {
    return isMobile
        ? lazy(() => import (/*webpackChunkName: "App-mobile"*/'./app/mobile/App.jsx'))
        : lazy(() => import (/*webpackChunkName: "App"*/'./app/desktop/App.jsx'));
};

const store =  configureStore();
window.store = store;

const Component = getAppComponent(getBrowserInfo().isMobile);

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
            <Component/>
        </Suspense>
    </Provider>,
    document.getElementById('root')
);