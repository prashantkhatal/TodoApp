import React from 'react';
import PropTypes from 'prop-types';

import { Link } from './Link';
import { VISIBILITY_STATUSES } from '../actions';

const visibilityOptions = [
    {
        linkText: 'All',
        status: VISIBILITY_STATUSES.SHOW_ALL
    },
    {
        linkText: 'Completed',
        status: VISIBILITY_STATUSES.SHOW_COMPLETED
    },
    {
        linkText: 'Active',
        status: VISIBILITY_STATUSES.SHOW_ACTIVE
    }
];

export function Footer( props ) {
    return (
        <div>Show:
            {visibilityOptions.map( ( option, index ) => {
                return <Link key={index} {...props} status={option.status} linkText={option.linkText}
                             isActive={(props.visibilityFilter == option.status) ? true : false}/>
            } )}
        </div>
    );
}

Footer.propTypes = {
    visibilityFilter: PropTypes.string.isRequired
}