import { Movie } from './movie';

export interface State {
    movies: Movie[];
    searchType: string;
    unsortedMovies: Movie[];
    sortType: string;
    movieId: number | null;
    selectedMovie: Movie | null;
    loadingStatus: boolean;
}
