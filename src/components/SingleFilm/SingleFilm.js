import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

import { API } from "../../main"

import { Button } from "../Button/Button"

import "./SingleFilm.css";

// Separate component for single film display in order to ease developing in the future
export const SingleFilm = () => {

    const filmId = document.URL.split('/')[document.URL.split('/').length - 1]
    const history = useHistory();

    const [film, setFilm] = useState({});
    useEffect(() => {
        axios.get(`${API}/${filmId}`)
            .then((res) => {
                setFilm(res.data);
            })
    }, [filmId])


    return (
        <div>
            <div className="single-film">
                <img className="single-film-img" src={film.image} alt={`${film.title} cover`} />
                <div className="single-film-info">
                    <h1 className="single-film-info__title film-info__title">{film.title}</h1>
                    <h2 className="single-film-info__director">Director: {film.director}</h2>
                    <h2 className="single-film-info__release-date">Release Date: {film.release_date}</h2>
                    <Button onClick={() => history.push('/')} className="single-film-info__button" buttonContent="Back" />
                </div>
            </div>
        </div>
    )
}