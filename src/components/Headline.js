/**
 * Default Imports 👩‍💻
 */
import React, { useState, useEffect } from 'react';


export default function Headline( props ){
    const { text } = props;
    return (
        <h1>{ text }</h1>
    );
}