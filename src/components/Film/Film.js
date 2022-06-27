import { Button } from "../Button/Button"

import "./Film.css"

export const Film = ({ image, title, description }) => {
    return (
        <div className="film">
            <img className="film-img" src={image} alt={`${title} cover`} />
            <div className="film-info">
                <h2 className="film-info__title">{title}</h2>
                <p className="film-info__description">{description}</p>
                <Button className="film-info__button" buttonContent="See More" />
                <div className="film-info__background-image">
                    <img src={require("../../assets/totoro.png")} alt="" />
                </div>
            </div>
        </div>
    )
}