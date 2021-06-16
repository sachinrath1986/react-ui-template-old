import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import axios from 'axios';

import { PersistGate } from 'redux-persist/integration/react'

import './index.scss';

import App from './App';


import * as config from './configs';

import reportWebVitals from './reportWebVitals';
import store, { persistor } from './redux/configureStore';

config.setupAxios(axios, store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
