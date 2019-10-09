import { createStore, applyMiddleware } from 'redux';
import { getBrowserInfo } from './utils/common';
import React, { lazy, Suspense } from 'react';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import '../../style/ButtonSettings.css';
import '../../style/Main.css';
import '../../style/UsersList.css';
import '../../style/MainHeader.css';
import '../../style/Emoji.css';
import '../../style/ContentBlock.css';
import '../../style/ChatCloud.css';
import '../../style/ChatBlock.css';
import '../../style/Settings.css';
import '../../style/LanguageDropdown.css';
import '../../style/ThemeDropdown.css';
import '../../style/ErrorWindow.css';
import '../../style/defaultSettings.css';
import '../../style/privateCheckbox.css';
import '../../style/EmojisCheckbox.css';

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
        ? lazy(() => import (/*webpackChunkName: "App-mobile"*/'./app/mobile/App.jsx'))
        : lazy(() => import (/*webpackChunkName: "App"*/'./app/desktop/App.jsx'));
};

const store =  configureStore();
window.store = store;

const Component = getAppComponent(getBrowserInfo().isMobile);

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
            <I18nextProvider i18n={i18n}>
                <Component/>
            </I18nextProvider>
        </Suspense>
    </Provider>,
    document.getElementById('root')
);