import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import InitialState from '../initialState';
import reducer from '../reducers';

const store = createStore(reducer, InitialState);
const history = createBrowserHistory();

const ProviderMock = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>
      {children}
    </Router>
  </Provider>
);

export default ProviderMock;
