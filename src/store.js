import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddlware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import movieBrowserReducer from './reducers/movie.reducers';

// Combine all reducers
const rootReducer = combineReducers({
    movieReducer : movieBrowserReducer
});

// Create the loggerMiddleware
const loggerMiddleware = createLogger();

const store = createStore(
    //reducer 
    rootReducer,
    undefined,
    compose(
        applyMiddleware(
            loggerMiddleware,
            thunkMiddlware
        )
    )
);

export default store;
