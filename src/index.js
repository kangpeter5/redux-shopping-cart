import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';
import './index.css';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
/* eslint-disable no-underscore-dangle */
const store = createStoreWithMiddleWare(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
);
