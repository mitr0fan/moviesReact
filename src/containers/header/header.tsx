import React, { Fragment, SyntheticEvent } from 'react';
import './header.scss';
import { connect } from 'react-redux';
import {
    changeSearchType,
    getMovies,
    changeSortType,
    getUnsortedMovies,
    changeLoadingStatus,
} from '../../actions/movies-actions';
import { CONSTANTS } from '../../constants/constants';
import { http } from '../../services/httpRequest';
import { AmountAndSortPanel } from '../../components/amount-and-sort-panel/amount-and-sort-panel';
import { Movie } from '../../types/movie';
import { MoviesResponse } from '../../types/httpType';
import { State } from '../../types/state';

interface Props {
    searchType: string;
    movies: Movie[];
    unsortedMovies: Movie[];
    sortType: string;
    dispatch: (action: any) => any;
}

class Header extends React.Component<Props> {

    static getInitialProps({store}: any) {}

    constructor(props: Props) {
        super(props);
        this.handlerInput = this.handlerInput.bind(this);
        this.sortBy = this.sortBy.bind(this);
    }

    inputValue: string = '';

    handlerInput(event: SyntheticEvent) {
        const element = event.target as HTMLInputElement;
        this.inputValue = element.value;
    }

    handlerSearchButton(): void {
        const url = `?search=${this.inputValue}&searchBy=${this.props.searchType}`;

        http(CONSTANTS.URL_FILMS + url)
            .then((res: MoviesResponse) => {
                this.props.dispatch(getMovies([...res.data]));

                this.props.dispatch(getUnsortedMovies([...res.data]));

                if (this.props.sortType !== '') {
                    this.props.dispatch(changeSortType(''));
                }
            })
            .finally(() => this.props.dispatch(changeLoadingStatus(false)));
    }

    searchByTitle(): void {
        this.props.dispatch(changeSearchType(CONSTANTS.SEARCH_BY_TITLE_STATE));
    }

    searchByGenre(): void {
        this.props.dispatch(changeSearchType(CONSTANTS.SEARCH_BY_GENRE_STATE));
    }

    sortFunction(sortType: string): Movie[] | void {
        if (sortType === CONSTANTS.SORT_BY_DATE) {
            return this.props.movies.sort((a: any, b: any) => {
                return (
                    new Date(b.release_date).getTime() -
                    new Date(a.release_date).getTime()
                );
            });
        }
        if (sortType === CONSTANTS.SORT_BY_RATING) {
            return this.props.movies.sort((a: any, b: any) => {
                return b.vote_average - a.vote_average;
            });
        }
    }

    sortBy(sortType: string): void {
        if (this.props.sortType !== sortType) {
            this.props.dispatch(changeSortType(sortType));

            const movies = this.sortFunction(sortType);

            this.props.dispatch(getMovies([...(movies as Movie[])]));
        } else {
            this.props.dispatch(changeSortType(''));

            this.props.dispatch(getMovies([...this.props.unsortedMovies]));
        }
    }

    render() {
        return (
            <Fragment>
                <header className="header">
                    <div className="header__content">
                        <span className="header__app-name">Movies</span>
                        <span className="header__input-name">
                            Find your movie
                        </span>
                        <div className="header__input-field">
                            <input
                                className="header__input"
                                type="text"
                                onChange={this.handlerInput}
                            ></input>
                        </div>
                        <div className="header__buttons">
                            <span>SEARCH BY</span>
                            <button
                                className={
                                    this.props.searchType === 'title'
                                        ? 'button button_active'
                                        : 'button'
                                }
                                onClick={() => this.searchByTitle()}
                            >
                                TITLE
                            </button>
                            <button
                                className={
                                    this.props.searchType === 'genres'
                                        ? 'button button_active'
                                        : 'button'
                                }
                                onClick={() => this.searchByGenre()}
                            >
                                GENRE
                            </button>
                            <div className="empty"></div>
                            <button
                                className="button button_search"
                                onClick={() => this.handlerSearchButton()}
                            >
                                SEARCH
                            </button>
                        </div>
                    </div>
                </header>
                <AmountAndSortPanel
                    count={this.props.movies.length}
                    sortBy={this.sortBy}
                    sortType={this.props.sortType}
                />
            </Fragment>
        );
    }
}

function mapStateToProps(state: State) {
    return {
        searchType: state.searchType,
        movies: state.movies,
        unsortedMovies: state.unsortedMovies,
        sortType: state.sortType,
    };
}

export default connect(mapStateToProps)(Header);
