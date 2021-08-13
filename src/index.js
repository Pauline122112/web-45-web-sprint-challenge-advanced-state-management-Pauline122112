import React from "react";
import ReactDOM from "react-dom";

//1. Add in all necessary components and library methods.
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

//here is the middleware
import { logger } from 'redux-logger'
import { thunk } from 'redux-logger'

import "./index.css";
import App from "./App";

//here is the reducer
import reducer from './reducers'

const { worker } = require('./mocks/browser');
worker.start();

//2. Create a store that includes thunk and logger middleware support.
const store = createStore(reducer, applyMiddleware(thunk,logger))

//3. Wrap the App component in a react-redux Provider element.

ReactDOM.render(
    <Provider store={store}>
    <App /> 
    </Provider>,
    rootElement
    );
    
const rootElement = document.getElementById("root");


