import React from 'react';
import App from './Components/App.js';
import { render } from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import topSearchReducer from './reducers/topSearchReducer'
import searchReducer from './reducers/searchReducer'
import productDetailReducer from './reducers/productDetailReducer'
import compareDetailReducer from './reducers/compareDetailReducer'
import allSearchesReducer from './reducers/allSearchesReducer'

const rootReducer = combineReducers({  //multiple reducers stored in one function
   topSearchReducer,
   searchReducer,
   productDetailReducer,
   compareDetailReducer,
   allSearchesReducer

})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//


let myStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// Redux store, is created using the createStore. It is a hash which stores all the state. Two parameters passed - reducer and the middleware

 // Provider component is used to set the connection between the component and the store, store is passed in as a prop
render (
  <Provider store={myStore}>
  <App />
  </Provider>,
  document.getElementById('root')
);
