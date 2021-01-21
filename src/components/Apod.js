/**
 * Default Imports 👩‍💻
 */
import React, { useState, useEffect } from 'react';
import { API_KEY } from '../constants'

/**
 * Import Custom Components 👩‍💻
 */
import Headline from './Headline';
import Photo from './Photo';
import Video from './Video';
import Summary from './Summary';
import API from './api';

export default function Apod( props ){
    const { date } = props;
    const [ details, setDetails ] = useState({});

    /**
     * Use custom API module to utilize axios.get in a shorter amount of code.
     * 👏👏👏
     */
    useEffect( () => {
        API( `https://api.nasa.gov/planetary/apod?api_key=${ API_KEY }&date=${ date }`, ( res ) =>{
            setDetails( res.data );
        } )
    }, [ date ] );

    if (!date) return <h3>Loading...</h3>
    return (
        <div>
            <Headline text={ details.title } />
            {
                details.media_type === "image" 
                ? <Photo url={ details.url } hd={ details.hdurl } alt={ details.title } /> 
                : <Video url={ details.url } /> 

            }
            <Summary text={ details.explanation } />
        </div>
    );

}

