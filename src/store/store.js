import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
var store = createStore(rootReducer,({videoList: [], currentVideo: null}) , applyMiddleware(thunk));

export default store;