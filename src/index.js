import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import {legacy_createStore} from 'redux'
import {Provider} from 'react-redux'
import { counter } from './reducers/counter'
const store=legacy_createStore(counter)
ReactDOM.render(
    <Provider store={store}>
      <App/>
      </Provider>
,
    document.getElementById("app")
);



