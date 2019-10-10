import { createStore, applyMiddleware } from 'redux';
import { Loader } from './loader/styledComponent';
import { getBrowserInfo } from './utils/common';
import React, { lazy, Suspense } from 'react';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import i18n from './locale';
import rootReducer from '../client/reducers';
import rootSaga from '../client/sagas';
import { I18nextProvider } from 'react-i18next';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
      ...createStore(rootReducer, applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()),
      runSaga: sagaMiddleware.run(rootSaga)
  }
};

const getAppComponent = isMobile => {
    return isMobile
        ? lazy(() => import (/*webpackChunkName: "App-mobile"*/'./app/mobile'))
        : lazy(() => import (/*webpackChunkName: "App"*/'./app/desktop'));
};

const store =  configureStore();
window.store = store;

const Component = getAppComponent(getBrowserInfo().isMobile);

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<Loader/>}>
            <I18nextProvider i18n={i18n}>
                <Component/>
            </I18nextProvider>
        </Suspense>
    </Provider>,
    document.getElementById('root')
);