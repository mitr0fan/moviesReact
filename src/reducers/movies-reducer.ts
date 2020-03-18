import { Action } from '../types/action';
import * as types from '../constants/actionTypes';
import { CONSTANTS } from '../constants/constants';
import { State } from '../types/state';
import { Movie } from '../types/movie';

const initiaiState: State = {
    movies: [],
    searchType: CONSTANTS.SEARCH_BY_TITLE_STATE,
    unsortedMovies: [],
    sortType: '',
    movieId: null,
    selectedMovie: null,
    loadingStatus: false,
};

export function changeMoviesState(
    state: State = initiaiState,
    action: Action
): State {
    switch (action.type) {
        case types.GET_MOVIES:
            return {
                ...state,
                movies: action.payload as Movie[],
            };
        case types.SEARCH_MOVIES:
            return {
                ...state,
                movies: action.payload as Movie[],
            };
        case types.CHANGE_SEARCH_TYPE:
            return {
                ...state,
                searchType: action.payload as string,
            };
        case types.GET_UNSORTED_MOVIES:
            return {
                ...state,
                unsortedMovies: action.payload as Movie[],
            };
        case types.CHANGE_SORT_TYPE:
            return {
                ...state,
                sortType: action.payload as string,
            };
        case types.SELECT_MOVIE_ID:
            return {
                ...state,
                movieId: action.payload as number,
            };
        case types.SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: action.payload as Movie,
            };
        case types.CHANGE_LOADING_STATUS:
            return {
                ...state,
                loadingStatus: action.payload as boolean,
            };
        default:
            return state;
    }
}
