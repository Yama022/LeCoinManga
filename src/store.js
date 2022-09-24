import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

// Import all middlewares
import genreMiddleware from './middlewares/genre';
import userMiddleware from './middlewares/user';

// Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Declare middlewares
const enhancers = composeEnhancers(
    applyMiddleware(
        genreMiddleware,
        userMiddleware
    ),
);

const store = createStore(reducer, enhancers);

export default store;
