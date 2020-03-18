import React from 'react';
import './footer.scss';

export class Footer extends React.Component {
    render() {
        const date = new Date().getFullYear();
        return (
            <div className="container-footer">
                <footer className="footer">Movies, {date}</footer>
            </div>
        );
    }
}
