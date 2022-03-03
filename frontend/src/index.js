import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from './themeConfig';
import Routes from './routes'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
