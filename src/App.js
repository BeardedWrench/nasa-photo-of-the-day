import React, { useState } from 'react';
import './App.css';

/**
 * Import Custom Components 👩‍💻
 */
import Apod from './components/Apod'
import SearchBar from './components/Searchbar';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;


function App() {

  const [ day, setDay ] = useState( today );

  const changeDate = ( event ) => {
    const { value } = event.target;
    setDay( value )
  }

  return (
    <div className="App">
      <SearchBar onChange={ changeDate } current={ day } />
      <Apod date={ day } />
    </div>
  );
}

export default App;
