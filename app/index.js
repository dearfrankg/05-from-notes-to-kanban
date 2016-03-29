import './main.css';

import 'babel-polyfill'
import './lib/utils'
import storage from './lib/storage'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './dux'
import DevTools from './components/DevTools';


const createStoreWithMiddleware = compose(
  DevTools.instrument()
)(createStore);

const APP_STORAGE = 'my_redux_kanban';
const initialState = storage.get(APP_STORAGE) || {}
const store = createStoreWithMiddleware(rootReducer, initialState)
store.subscribe(() => storage.set(APP_STORAGE, store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
