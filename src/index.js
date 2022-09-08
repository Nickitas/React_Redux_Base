import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { rootReduser } from './redux/rootReduser'
import { Provider } from 'react-redux'
import { spamFilter } from './redux/middleware'
import './index.css'
import App from './App'

const store = createStore(rootReduser, compose(
  applyMiddleware(
    thunk,
    spamFilter
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// npm i redux react-redax --save

// npm i redux-thunk --save