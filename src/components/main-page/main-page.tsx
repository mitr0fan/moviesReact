import React, { Fragment } from 'react';
import Header from '../../containers/header/header';
import FilmsContent from '../../containers/films-content/films-content';
import { Footer } from '../footer/footer';

export class MainPage extends React.Component {

    static getInitialProps({store}: any) {}

    render() {
        return (
            <Fragment>
                <Header />
                <FilmsContent />
                <Footer />
            </Fragment>
        );
    }
}
