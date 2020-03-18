import React from 'react';
import './error-boundary.scss';
import { Link } from 'react-router-dom';

export class ErrorBoundary extends React.Component<
    {},
    { hasError: boolean; error: any }
> {
    constructor(props: {}) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: any) {
        return {
            hasError: true,
            error,
        };
    }

    deleteError() {
        this.setState({
            hasError: false,
            error: null,
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error">
                    {this.state.error.name}
                    <Link to="/">
                        <button
                            className="button"
                            onClick={() => this.deleteError()}
                        >
                            Back to main page
                        </button>
                    </Link>
                </div>
            );
        }
        return this.props.children;
    }
}
