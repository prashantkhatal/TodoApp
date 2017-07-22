import React from 'react';

export const Link = ( props ) => {
    return (
        <a
            href="#"
            className={(props.isActive) ? 'active' : '' }
            onClick={( e ) => {
                e.preventDefault();
                props.switchVisibility( props.status );
            }}
        >{props.linkText}</a>
    );
}