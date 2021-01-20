import React from 'react';

export default function Searchbar( props ){
    return(
        <form className="search-form">
            <input
            type="date"
            max="2021-01-20"
            onChange={ props.onChange }
            />
        </form>
    );
}