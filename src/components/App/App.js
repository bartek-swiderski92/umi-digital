import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { API } from "../../main"

import { Film } from '../Film/Film';
import { SingleFilm } from '../SingleFilm/SingleFilm';
import './App.css';

function App() {

  const [films, setFilms] = useState([]);

  function fetchData() {
    axios.get(API)
      .then(res => {
        setFilms(res.data)
      })
      .catch(error =>
        console.log(error))
  }

  useEffect(() => fetchData(), [])

  function displayData(array, amountOfElements) {
    const displayArr = []
    if (Array.isArray(array)) {
      const filmsArr = films.map(film => {
        return <Film key={film.id} filmId={film.id} image={film.image} title={film.title} description={film.description} />
      })
      for (let i = 0; i < amountOfElements; i++) {
        const film = filmsArr[i];
        displayArr.push(film)
      }
      return displayArr
    }

  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className="films-wrapper">
              {displayData(films, 5)}
            </div>
          </Route>
          <Route path="/film/:id">
            <SingleFilm />
          </Route>
        </Switch >
      </BrowserRouter>
    </div>
  );
}

export default App;
