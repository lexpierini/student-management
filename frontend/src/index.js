import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store'
import { Provider } from 'react-redux'

import Home from './Components/Home';


ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
