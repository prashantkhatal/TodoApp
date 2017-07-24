import React from 'react';
import InputElement from 'react-input-mask';


export const InputMask = function( props ) {
	return(
		<InputElement mask="+\91 aa aea aaaa" maskChar="_" alwaysShowMask={true} formatChars={{'e':'[A-Za-z]', 'a':'[pras]'}}/>
	);
}