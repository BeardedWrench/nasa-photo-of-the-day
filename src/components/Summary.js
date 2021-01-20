/**
 * Default Imports 👩‍💻
 */
import React from 'react';


export default function Summary( props ){
    const { text } = props;
    return (
        <p>{ text }</p>
    );
}