import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';
import reducer from './reducer/reducer';

const store = createStore(reducer,compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById("root"))