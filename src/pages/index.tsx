import React from "react";
import { Footer } from "../components/footer/footer";
import Header from '../containers/header/header';

export default class Index extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Footer />
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
