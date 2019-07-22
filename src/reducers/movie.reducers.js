
import {combineReducers} from 'redux';
import { createReducer, createAsyncReducer } from './redux.helper';
import { actionKeys as keys} from '../actions/movie.actions'

const moviesModalReducer = createReducer({isOpen : false}, {});

const movieSuccessReducer = (state,action) => {
    const existingMovies = state.response ? state.response.results : [];
    return {
        ...state,
        isLoading : false,
        response : {
            ...action.response,
            results : [
                ...existingMovies,
                ...action.response.results
            ]
        }
    }
};

const moviesBrowserReducer = combineReducers({
    movieModal : moviesModalReducer,
    topMovies : createAsyncReducer(keys.GET_TOP_MOVIES, {
        [`${keys.GET_TOP_MOVIES}_SUCCESS`]: movieSuccessReducer
    }),
    movieDetails: createAsyncReducer(keys.GET_TOP_MOVIES),
});

export default moviesBrowserReducer;