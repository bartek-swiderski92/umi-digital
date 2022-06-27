import { Button } from "../Button/Button"

import "./Film.css"

export const Film = ({ image, title, description }) => {
    return (
        <div className="film">
            <img src={image} alt={`${title} cover}`} />
            <div class="film-info">
                <h2 class="film-info__title">{title}</h2>
                <p class="film-info__description">{description}</p>
                <Button className="film-info__button" buttonContent="See More" />
            </div>
        </div>
    )
}