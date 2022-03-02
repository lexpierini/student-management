import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from './themeConfig';
import Login from './Components/Login';


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
