import 'babel-polyfill';
import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import HeroList from './containers/HeroList';
import Hero from './containers/Hero';
import rootReducer from './reducers';

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

ReactDom.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={HeroList}/>
        <Route path='/hero/:id' component={Hero} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
