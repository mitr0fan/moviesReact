import App from 'next/app';
import { Provider } from 'react-redux';
import { NextPageContext } from 'next';
import { Store } from 'redux';
import store from '../store/store';
import withRedux from "next-redux-wrapper";
import React from "react";
import './movie-info/movie-info.scss';
import '../containers/header/header.scss';
import '../components/amount-and-sort-panel/amount-and-sort-panel.scss';

interface AppContext extends NextPageContext {
    store: Store;
}

class MoviesApp extends App<AppContext> {

    static async getInitialProps({Component, ctx}: any) {

        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        };

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
            <style>
                {`
                    body {
                        margin: 0;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
                            'Helvetica Neue', sans-serif;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }
                `}
            </style>
            </>
        )
    }
}

const makeStore = () => store as any;

export default withRedux(makeStore)(MoviesApp);