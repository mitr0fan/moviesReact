import React from 'react';
import './films-content.scss';
import { Film } from '../../components/film/film';
import { http } from '../../services/httpRequest';
import { connect } from 'react-redux';
import {
    getMovies,
    getUnsortedMovies,
    selectMovieId,
    selectedMovie,
    changeSortType,
    changeLoadingStatus,
} from '../../actions/movies-actions';
import { MoviesResponse } from '../../types/httpType';
import { Movie } from '../../types/movie';
import { State } from '../../types/state';
import { CONSTANTS } from '../../constants/constants';
import FlipMove from 'react-flip-move';

interface Props extends React.Props<any> {
    movies: Movie[];
    dispatch: (action: any) => any;
    selectedMovie: Movie | null;
}

function mapStateToProps(state: State) {
    return {
        movies: state.movies,
        selectedMovie: state.selectedMovie,
    };
}

class FilmsContent extends React.Component<Props> {

    static getInitialProps({store}: any) {}

    componentDidMount() {
        if (!this.props.selectedMovie) {
            http(CONSTANTS.URL_FILMS)
                .then((res: MoviesResponse) => {
                    this.props.dispatch(getMovies([...res.data]));
                    this.props.dispatch(getUnsortedMovies([...res.data]));
                })
                .finally(() => this.props.dispatch(changeLoadingStatus(false)));
        }
    }

    selectMovie(id: number) {
        this.props.dispatch(changeSortType(''));
        this.props.dispatch(selectMovieId(id));

        const url = `/${id}`;
        http(CONSTANTS.URL_FILMS + url)
            .then((movie: Movie) => {
                this.props.dispatch(selectedMovie(movie));

                const url = `?search=${movie.genres[0]}&searchBy=${CONSTANTS.SEARCH_BY_GENRE_STATE}`;

                http(CONSTANTS.URL_FILMS + url).then((res) => {
                    this.props.dispatch(getMovies([...res.data]));
                    this.props.dispatch(getUnsortedMovies([...res.data]));
                });
            })
            .finally(() => this.props.dispatch(changeLoadingStatus(false)));

        const interval = setInterval(() => {
            window.scrollBy(0, -70);
            if (window.scrollY === 0) {
                clearInterval(interval);
            }
        }, 1000 / 60);
    }

    render() {
        if (this.props.movies.length > 0) {
            return (
                <FlipMove className="films-container">
                    {this.props.movies.map((movie: any) => (
                        <Film
                            key={movie.id.toString()}
                            movie={movie}
                            selectMovie={this.selectMovie.bind(this)}
                        />
                    ))}
                </FlipMove>
            );
        } else {
            return <div className="films-container">FILMS NOT FOUND</div>;
        }
    }
}

export default connect(mapStateToProps)(FilmsContent);
