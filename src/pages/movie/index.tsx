import React, { Fragment } from 'react';
import { MovieInfo } from '../movie-info/movie-info';
import FilmsContent from '../films-content/films-content';
import { Footer } from '../../components/footer/footer';
import { PageNotFound } from '../page-not-found/page-not-found';
import { http } from '../../services/httpRequest';
import { CONSTANTS } from '../../constants/constants';
import { Movie } from '../../types/movie';
import {
    selectedMovie,
    getMovies,
    getUnsortedMovies,
    changeLoadingStatus,
} from '../../actions/movies-actions';
import { MoviesResponse } from '../../types/httpType';
import { connect } from 'react-redux';
import { State } from '../../types/state';
import { Loading } from '../../components/loading/loading';

interface Props {
    selectedMovie: Movie;
    movies: Movie[];
    loadingStatus: boolean;
}

interface PropsWithMatch extends Props {
    match: any;
    dispatch: (action: any) => void;
    query: {id: string};
}

export class MovieInfoPage extends React.Component<PropsWithMatch> {

    static getInitialProps({store, query}: any) {
        return {store, query}
    }

    componentDidMount(): void {
        if (!this.props.selectedMovie) {
            const id = this.props.query.id;

            http(CONSTANTS.URL_FILMS + `/${id}`)
                .then((movie: Movie) => {
                    if (movie.title) {
                        this.props.dispatch(selectedMovie(movie));

                        const url = `?search=${movie.genres[0]}&searchBy=genres`;

                        http(CONSTANTS.URL_FILMS + url).then(
                            (res: MoviesResponse) => {
                                this.props.dispatch(getMovies([...res.data]));
                                this.props.dispatch(
                                    getUnsortedMovies([...res.data])
                                );
                            }
                        );
                    }
                })
                .finally(() => this.props.dispatch(changeLoadingStatus(false)));
        }
    }

    backToMainPage(): void {
        this.props.dispatch(changeLoadingStatus(false));
        this.props.dispatch(getUnsortedMovies([...this.props.movies]));
    }

    loading() {
        if(this.props.loadingStatus) {
            return <Loading />
        }
    }

    render() {
        if (!isNaN(+this.props.query.id)) {
            return (
                <Fragment>
                    {this.loading()}
                    <MovieInfo
                        backToMainPage={this.backToMainPage.bind(this)}
                        selectedMovie={this.props.selectedMovie}
                    />
                    <FilmsContent />
                    <Footer />
                </Fragment>
            );
        } else {
            return <PageNotFound />;
        }
    }
}

function mapStateToProps(state: State): Props {
    return {
        selectedMovie: state.selectedMovie as Movie,
        movies: state.movies,
        loadingStatus: state.loadingStatus
    };
}

export default connect(mapStateToProps)(MovieInfoPage);
