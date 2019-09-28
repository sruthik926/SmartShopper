import React from 'react';
import App from './App';
import { render } from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import topSearchReducer from './reducers/topSearchReducer'
import searchReducer from './reducers/searchReducer'
import productDetailReducer from './reducers/productDetailReducer'
import compareDetailReducer from './reducers/compareDetailReducer'

const rootReducer = combineReducers({
   topSearchReducer,
   searchReducer,
   productDetailReducer,
   compareDetailReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = compose()

let myStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
console.log('myStore', myStore)

render (
  <Provider store={myStore}>
  <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
