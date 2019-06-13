import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {Provider} from 'react-redux';
import store from './store/store.js';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
