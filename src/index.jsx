import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import './index.css';
import * as serviceWorker from './serviceWorker';
import "tachyons";
import App from "./containers/App.jsx";
import {searchRobots, requestRobots} from "./reducers.js";

const rootReducer = combineReducers({searchRobots, requestRobots});
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render( < Provider store = { store } > < App /> </Provider> , document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.register();