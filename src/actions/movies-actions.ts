import * as TYPES from '../constants/actionTypes';
import { Movie } from '../types/movie';
import { Action } from '../types/action';

export function getMovies(movies: Movie[]): Action {
    return {
        type: TYPES.GET_MOVIES,
        payload: movies,
    };
}

export function changeSearchType(type: string): Action {
    return {
        type: TYPES.CHANGE_SEARCH_TYPE,
        payload: type,
    };
}

export function getUnsortedMovies(movies: Movie[]): Action {
    return {
        type: TYPES.GET_UNSORTED_MOVIES,
        payload: movies,
    };
}

export function changeSortType(type: string): Action {
    return {
        type: TYPES.CHANGE_SORT_TYPE,
        payload: type,
    };
}

export function selectMovieId(id: number): Action {
    return {
        type: TYPES.SELECT_MOVIE_ID,
        payload: id,
    };
}

export function selectedMovie(movie: Movie): Action {
    return {
        type: TYPES.SELECTED_MOVIE,
        payload: movie,
    };
}

export function changeLoadingStatus(status: boolean): Action {
    return {
        type: TYPES.CHANGE_LOADING_STATUS,
        payload: status,
    };
}
