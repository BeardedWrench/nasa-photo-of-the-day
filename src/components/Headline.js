/**
 * Default Imports 👩‍💻
 */
import React from 'react';


export default function Headline( props ){
    const { text } = props;
    return (
        <h1>{ text }</h1>
    );
}