import { createAsyncActionCreator } from "../reducers/redux.helper";
import * as movieService from '../service/movie.service';

export const actionKeys = {
    'GET_TOP_MOVIES' : 'GET_TOP_MOVIES',
    'GET_MOVIE_DETAILS' : 'GET_MOVIE_DETAILS'
};

export const getTopMovies = (pageNo) => createAsyncActionCreator(
    actionKeys.GET_TOP_MOVIES,
    movieService.getTopMovies,
    pageNo
);

export const getMoviedetails = (movieId) => createAsyncActionCreator(
    actionKeys.getMoviedetails,
    movieService.getMovieDetais,
    movieId
);
