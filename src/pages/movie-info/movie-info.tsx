import React, { Fragment } from 'react';
import './movie-info.scss';
import Link from 'next/link';
import { Movie } from '../../types/movie';
import { PageNotFound } from '../page-not-found/page-not-found';

interface Props {
    selectedMovie: Movie;
    backToMainPage: () => void;
}

export class MovieInfo extends React.Component<Props> {
    
    static getInitialProps({store}: any) {}

    render() {
        const movie = this.props.selectedMovie;
        return !!movie ? (
            <Fragment>
                <header className="selected-movie">
                    <div className="selected-movie__content">
                        <div className="selected-movie__head">
                            <span className="selected-movie__app-name">
                                Movies
                            </span>
                            <Link href="/">
                                <button
                                    className="button"
                                    onClick={() => this.props.backToMainPage()}
                                >
                                    SEARCH
                                </button>
                            </Link>
                        </div>
                        <div className="selected-movie__content-container">
                            <img
                                src={movie.poster_path}
                                alt="Poster"
                                className="selected-movie__poster"
                            />
                            <div className="selected-movie__info">
                                <div className="selected-movie__title-rating">
                                    <span className="selected-movie__title">
                                        {movie.title}
                                    </span>
                                    <span className="selected-movie__rating">
                                        {movie.vote_average}
                                    </span>
                                </div>
                                <div className="selected-movie__date-duration">
                                    <span>
                                        {movie.release_date.slice(0, 4)}
                                    </span>
                                    <span>{movie.runtime} min</span>
                                </div>
                                <div className="selected-movie__overview">
                                    {movie.overview}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="movies-genre">
                    <div className="movies-genre__genre">
                        Movies by {this.props.selectedMovie.genres[0]} genre
                    </div>
                </div>
            </Fragment>
        ) : (
            <PageNotFound />
        );
    }
}
