/**
 * Default Imports 👩‍💻
 */
import React from 'react';


export default function Photo( props ){
    const { alt, url, hd } = props;
    return (
        <a href={ hd }><img src={ url } alt={ alt } /></a>
    );
}