import React from 'react';

export const Link = (props) => {
        console.log(props);
        return(
            <a href="#" className={(props.isActive) ? 'active' : '' }>{props.linkText}</a>
        );
    }