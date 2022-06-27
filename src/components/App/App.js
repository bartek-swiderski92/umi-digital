import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

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

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {(() => {
              if (Array.isArray(films)) {
                return films.map(film => {
                  return <Film key={film.id} filmId={film.id} image={film.image} title={film.title} description={film.description} />
                })
              }
            })()}
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
