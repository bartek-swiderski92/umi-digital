import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Film } from '../Film/Film';
import './App.css';

function App() {

  const API = "https://ghibliapi.herokuapp.com/films";

  const [films, setFilms] = useState([]);

  function fetchData() {
    axios.get(API)
      .then(res => {
        console.log(res)
        setFilms(res.data)
      })
      .catch(error =>
        console.log(error))
  }

  useEffect(() => fetchData(), [])

  return (
    <div className="App">
      {(() => {
        if (Array.isArray(films)) {
          return films.map(film => {
            return <Film key={film.id} image={film.image} title={film.title} description={film.description} />
          })
        }
      })()}
    </div>
  );
}

export default App;
