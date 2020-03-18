import React from 'react';
import './app.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Loading } from './components/loading/loading';
import { connect } from 'react-redux';
import { ErrorBoundary } from './components/error-boundary/error-boundary';
import { MainPage } from './components/main-page/main-page';
import MovieInfoPage from './containers/movie-info-page/movie-info-page';
import { PageNotFound } from './components/page-not-found/page-not-found';

class App extends React.Component<any> {
    loadingComponent(): JSX.Element | undefined {
        if (this.props.loadingStatus) {
            return <Loading />;
        }
    }

    render() {
        return (
            <Router>
                <ErrorBoundary>
                    {this.loadingComponent()}
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route
                            path="/movie/:id"
                            exact
                            component={MovieInfoPage}
                        />
                        <Route component={PageNotFound} />
                        <Route path="/movie/:id/*" component={PageNotFound} />
                    </Switch>
                </ErrorBoundary>
            </Router>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        loadingStatus: state.loadingStatus,
    };
}

export default connect(mapStateToProps)(App);
