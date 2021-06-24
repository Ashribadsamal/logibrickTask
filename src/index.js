import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  "bootstrap/dist/css/bootstrap.css"
import store from './Store';
import Routes from './Route';
import Materialbutoon from './Materialbutoon'


ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <Routes/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

