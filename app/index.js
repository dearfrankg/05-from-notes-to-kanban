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

const initialState = storage.get('noteApp') || {}
const store = createStoreWithMiddleware(rootReducer, initialState)

store.subscribe(() => {
  storage.set('noteApp', store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
