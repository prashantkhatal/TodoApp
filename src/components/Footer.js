import React from 'react';
import {Link} from './Link';
import {VISIBILITY_STATUSES} from '../actions';

const visibilityOptions = [
    {
        linkText: 'Show All',
        status: VISIBILITY_STATUSES.SHOW_ALL
    },
    {
        linkText: 'Show Completed',
        status: VISIBILITY_STATUSES.SHOW_COMPLETED
    },
    {
        linkText: 'Show Active',
        status: VISIBILITY_STATUSES.SHOW_ACTIVE
    }
];

export function Footer(props) {
    return (
        <div>
            {visibilityOptions.map((option, index) => {
                return <Link key={index} linkText={option.linkText} isActive={(props.visibilityFilter == option.status) ? true : false}/>
            })}
        </div>
    );
}