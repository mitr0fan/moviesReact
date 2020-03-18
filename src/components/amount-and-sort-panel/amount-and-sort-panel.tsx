import React from 'react';
import './amount-and-sort-panel.scss';
import { CONSTANTS } from '../../constants/constants';

type Props = {
    count: number;
    sortType: string;
    sortBy: (p: string) => any;
};

export class AmountAndSortPanel extends React.Component<Props> {
    render() {
        return (
            <div className="amount-panel">
                <div className="panel-container">
                    <span className="amount-panel__count">
                        {this.props.count} movies found
                    </span>
                    <span>Sort by</span>
                    <div
                        className={
                            this.props.sortType === 'date'
                                ? 'amount-panel__sort-date amount-panel__sort-date_active'
                                : 'amount-panel__sort-date'
                        }
                        onClick={() =>
                            this.props.sortBy(CONSTANTS.SORT_BY_DATE)
                        }
                    >
                        release date
                    </div>
                    <div
                        className={
                            this.props.sortType === 'rating'
                                ? 'amount-panel__sort-rating amount-panel__sort-rating_active'
                                : 'amount-panel__sort-rating'
                        }
                        onClick={() =>
                            this.props.sortBy(CONSTANTS.SORT_BY_RATING)
                        }
                    >
                        rating
                    </div>
                </div>
            </div>
        );
    }
}
