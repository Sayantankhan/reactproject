import { async } from "q";

const MOVIE_DB_API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';

const GET_ALL_TOP_RATED_MOVIES = '/movie/top_rated';
const GET_SPECIFIC_MOVIES = '/movie/${movieId}';

const createMovieUrl = (relativeUrl , queryParameters ) => {
    let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}`;
    if(queryParameters) {
        queryParameters.forEach(queryParam => baseUrl += `&${queryParam}=${queryParameters[queryParam]}`);
    }
    return baseUrl;
};


export const getTopMovies = async ({pageno}) => {
    const url = createMovieUrl(GET_ALL_TOP_RATED_MOVIES, {
        pageno
    });
    return fetch(url);
};


export const getMovieDetais = async ({movieId}) => {
    const url = createMovieUrl(`${GET_SPECIFIC_MOVIES}/${movieId}`);
    return fetch(url);
}
