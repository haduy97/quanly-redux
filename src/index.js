import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import UserReducer from './redux/reducers/UserReducer';
import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(rootReducer);
const reducers = combineReducers({
    user: UserReducer
});
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
