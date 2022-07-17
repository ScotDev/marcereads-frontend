import React from 'react'
import articleStyles from '../styles/Article.module.css'

import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'

export default function StarRatings() {

    const totalStars = 5;
    const activeStars = 3.5;
    return (
        <div className={articleStyles.starRatingsContainer}> {[...new Array(totalStars)].map((arr, index) => {

            const activeState = activeStar;
            /*
                we only need to render empty icon layout when active state 
                is not set i.e -1  in our case or active state state is 
                less than index i.e show only when its 
                index is greater that active state
              */
            const showEmptyIcon = activeState === -1 || activeState < index + 1;

            const isActiveRating = activeState !== 1;
            const isRatingWithPrecision = activeState % 1 !== 0;
            const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
            const showRatingWithPrecision =
                isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;










            return index < activeStars ? <FaStar /> : <FaRegStar />;
        })}
            <p>4.5/5</p>
        </div>
    )
}
// https://blog.logrocket.com/build-a-half-star-rating-component-in-react-from-scratch/