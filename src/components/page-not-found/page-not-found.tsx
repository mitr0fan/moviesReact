import React from 'react';
import { Link } from 'react-router-dom';
import './page-not-found.scss';

export class PageNotFound extends React.Component {
    render() {
        return (
            <div className="error">
                PAGE NOT FOUND
                <Link to="/">
                    <button className="button">Back to main page</button>
                </Link>
            </div>
        );
    }
}
