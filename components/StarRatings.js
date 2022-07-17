import React from 'react'
import articleStyles from '../styles/Article.module.css'

import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'

export default function StarRatings() {

    const totalStars = 5;
    const activeStars = 3.5;
    return (
        <div className={articleStyles.starRatingsContainer}> {[...new Array(totalStars)].map((arr, index) => {
            return index < activeStars ? <FaStar /> : <FaRegStar />;
        })}
            <p>4.5/5</p>
        </div>
    )
}
