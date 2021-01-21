/**
 * Default Imports 👩‍💻
 */
import React from 'react';


export default function Video( props ){
    const { url } = props;
    return (
        <iframe width="854" height="480" src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    );
}