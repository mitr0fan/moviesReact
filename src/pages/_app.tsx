import App from 'next/app';
import { Provider } from 'react-redux';
import { NextPageContext } from 'next';
import { Store } from 'redux';
import store from '../store/store';
import withRedux from "next-redux-wrapper";
import React from "react";

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
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

const makeStore = () => store as any;

export default withRedux(makeStore)(MoviesApp);