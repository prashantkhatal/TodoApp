import React from 'react';

// This will help to return children component as element to be placed directly without
// any wrapper in TransitionGroup's component element
export const SingleTransitionElement = (props) => {
    const childArr = React.Children.toArray(props.children);
    return childArr[0] || null;
}