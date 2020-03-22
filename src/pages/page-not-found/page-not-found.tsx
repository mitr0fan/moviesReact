import React from 'react';
import Link from 'next/link';
import './page-not-found.scss';

export class PageNotFound extends React.Component {
    render() {
        return (
            <>
            <div className="error">
                PAGE NOT FOUND
                <Link href="/">
                    <button className="button">Back to main page</button>
                </Link>
            </div>
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
        );
    }
}
