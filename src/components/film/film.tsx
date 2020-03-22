import React from 'react';
import './film.scss';
import { Movie } from '../../types/movie';
import { Link } from 'react-router-dom';

type Props = {
    key: string;
    movie: Movie;
    selectMovie: (id: number) => void;
};

export class Film extends React.Component<Props> {

    static getInitialProps({store}: any) {}

    render() {
        const movie = this.props.movie;
        return (
            <Link to={`/movie/${movie.id}`}>
                <div
                    className="film-item"
                    onClick={() => this.props.selectMovie(movie.id)}
                >
                    <img
                        src={movie.poster_path}
                        className="film-item__poster"
                        alt="Poster"
                    />
                    <span className="film-item__title">{movie.title}</span>
                    <span className="film-item__release">
                        {movie.release_date.slice(0, 4)}
                    </span>
                    <span className="film-item__genres">
                        {movie.genres.join(' & ')}
                    </span>
                </div>
            </Link>
        );
    }
}
