import React from 'react'
import Router from './Router'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'

import { composeWithDevTools } from 'remote-redux-devtools'

import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(Thunk)
))

const SeriesApp = prop => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default SeriesApp;