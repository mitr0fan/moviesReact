import React, { Fragment } from 'react';
import Header from '../../containers/header/header';
import FilmsContent from '../films-content/films-content';
import { Footer } from '../../components/footer/footer';

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
