import { Movie } from './movie';

export interface MoviesResponse extends Response {
    data: Movie[];
    total: number;
    offset: number;
    limit: number;
}
