import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './reducers';
import { fetchHeroes, fetchHero } from './actions/heroes';

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(fetchHeroes());
store.dispatch(fetchHero(1011334));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
