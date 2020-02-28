import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk';

import {compose} from 'recompose';

import createApi from './api.js';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer.js';
import {operations} from './reducer/offers/offers';

import App from './components/app.jsx';

const api = createApi((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.dispatch(operations.loadOffers());


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
