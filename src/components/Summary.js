/**
 * Default Imports 👩‍💻
 */
import React, { useState, useEffect } from 'react';


export default function Photo( props ){
    const { text } = props;
    return (
        <p>{ text }</p>
    );
}